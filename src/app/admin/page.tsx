'use client';

import { useUser, useAuth, useFirestore } from '@/firebase';
import { signOut } from 'firebase/auth';
import { FormEvent, useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NewsList from '@/components/news-list';
import { PlusCircle, Upload, Trash2, FileText, Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { useCollection } from '@/firebase';
import { collection, deleteDoc, doc, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { NewsArticle, newsSchema } from '@/lib/news-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

const ADMIN_USER_EMAIL = "roopanrohith320@gmail.com";

export default function AdminPage() {
  const { user, loading } = useUser();
  const auth = useAuth();
  const { toast } = useToast();
  const firestore = useFirestore();
  const router = useRouter();

  const isAdmin = user?.email === ADMIN_USER_EMAIL;

  const { data: newsItems, loading: newsLoading, error: newsError } = useCollection<NewsArticle>(
    firestore ? query(collection(firestore, 'news'), orderBy('createdAt', 'desc')) : null
  );

  const { data: newspapers, loading: newspapersLoading, error: newspapersError } = useCollection<{id: string, title: string, url: string}>(
    firestore ? query(collection(firestore, 'newspapers'), orderBy('createdAt', 'desc')) : null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsArticle>({
    resolver: zodResolver(newsSchema),
  });
  
  const [isAddNewsOpen, setAddNewsOpen] = useState(false);
  const [isUploadPaperOpen, setUploadPaperOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [paperTitle, setPaperTitle] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);


  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
    router.push('/login');
  };

  const onAddNews: SubmitHandler<NewsArticle> = async (data) => {
    if (!firestore || !user) return;
    try {
      await addDoc(collection(firestore, 'news'), {
        ...data,
        id: '', // Firestore will generate an ID
        creatorId: user.uid,
        createdAt: serverTimestamp(),
      });
      toast({ title: 'News Added', description: 'The new article has been published.' });
      reset();
      setAddNewsOpen(false);
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not add news article.' });
    }
  };
  
  const handleDeleteArticle = async (id: string) => {
    if (!firestore) return;
    try {
      await deleteDoc(doc(firestore, 'news', id));
      toast({ title: 'News Deleted', description: 'The article has been removed.' });
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not delete article.' });
    }
  };
  
  const handleUploadDailyNews = async (event: FormEvent) => {
    event.preventDefault();
    if (!firestore || !user || !fileInputRef.current?.files?.[0] || !paperTitle) {
        toast({ variant: 'destructive', title: 'Error', description: 'Please select a file and enter a title.' });
        return;
    }

    setUploading(true);
    const file = fileInputRef.current.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `newspapers/${Date.now()}_${file.name}`);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        await addDoc(collection(firestore, 'newspapers'), {
            title: paperTitle,
            url: downloadURL,
            creatorId: user.uid,
            createdAt: serverTimestamp(),
        });

        toast({ title: 'Upload Successful', description: 'The daily newspaper has been uploaded.' });
        setPaperTitle('');
        if(fileInputRef.current) fileInputRef.current.value = '';
        setUploadPaperOpen(false);
    } catch (error) {
        console.error("Error uploading file: ", error);
        toast({ variant: 'destructive', title: 'Upload Failed', description: 'There was an error uploading the newspaper.' });
    } finally {
        setUploading(false);
    }
  };

  const handleDeleteNewspaper = async (id: string, url: string) => {
    if (!firestore) return;

    const storage = getStorage();
    const fileRef = ref(storage, url);

    try {
        // Delete the file from Storage
        await deleteObject(fileRef);
        // Delete the document from Firestore
        await deleteDoc(doc(firestore, 'newspapers', id));
        toast({ title: 'Newspaper Deleted', description: 'The newspaper has been removed.' });
    } catch (error) {
        console.error("Error deleting newspaper: ", error);
        toast({ variant: 'destructive', title: 'Deletion Failed', description: 'Could not delete the newspaper.' });
    }
  };

  if (loading || !user) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className='text-center sm:text-left'>
          <h1 className="text-3xl font-bold">Content Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user.email}.</p>
        </div>
        <Button onClick={handleLogout} className="w-full sm:w-auto">Logout</Button>
      </div>
      
      <div className='space-y-12'>
        {/* News Management */}
        <div className='space-y-8'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-center sm:text-left w-full sm:w-auto">Manage News Articles</h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    {isAdmin && (
                        <Dialog open={isAddNewsOpen} onOpenChange={setAddNewsOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto">
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add News
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add New Article</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleSubmit(onAddNews)} className="space-y-4">
                                    {/* Form fields for adding news... */}
                                    <div>
                                        <Label htmlFor="title">Title</Label>
                                        <Input id="title" {...register('title')} />
                                        {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="category">Category</Label>
                                        <Input id="category" {...register('category')} />
                                        {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="summary">Summary</Label>
                                        <Textarea id="summary" {...register('summary')} />
                                        {errors.summary && <p className="text-sm text-destructive">{errors.summary.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="content">Content</Label>
                                        <Textarea id="content" {...register('content')} rows={5} />
                                        {errors.content && <p className="text-sm text-destructive">{errors.content.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="imageUrl">Image URL</Label>
                                        <Input id="imageUrl" {...register('imageUrl')} />
                                        {errors.imageUrl && <p className="text-sm text-destructive">{errors.imageUrl.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="imageHint">Image Hint</Label>
                                        <Input id="imageHint" {...register('imageHint')} />
                                        {errors.imageHint && <p className="text-sm text-destructive">{errors.imageHint.message}</p>}
                                    </div>
                                    <div>
                                        <Label htmlFor="time">Time (e.g., 2 hours ago)</Label>
                                        <Input id="time" {...register('time')} />
                                        {errors.time && <p className="text-sm text-destructive">{errors.time.message}</p>}
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                        <Button type="button" variant="secondary">Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit">Publish</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
            {newsLoading && <p>Loading news...</p>}
            {newsError && <p className="text-destructive">Error loading news: {newsError.message}</p>}
            {newsItems && <NewsList newsItems={newsItems} onDelete={isAdmin ? handleDeleteArticle : undefined} isAdmin={isAdmin} />}
        </div>
        
        {/* Newspaper Management */}
        <div className='space-y-8'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-center sm:text-left w-full sm:w-auto">Manage Daily Newspapers</h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    {isAdmin && (
                       <Dialog open={isUploadPaperOpen} onOpenChange={setUploadPaperOpen}>
                            <DialogTrigger asChild>
                                <Button className="w-full sm:w-auto" variant="outline">
                                    <Upload className="mr-2 h-4 w-4" /> Upload Daily News Paper
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Upload Newspaper PDF</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleUploadDailyNews} className="space-y-4">
                                    <div>
                                        <Label htmlFor="paperTitle">Title (e.g., "E-Paper July 20, 2024")</Label>
                                        <Input
                                            id="paperTitle"
                                            value={paperTitle}
                                            onChange={(e) => setPaperTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="paperFile">Newspaper PDF File</Label>
                                        <Input id="paperFile" type="file" accept=".pdf" ref={fileInputRef} required />
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button type="button" variant="secondary" disabled={uploading}>Cancel</Button>
                                        </DialogClose>
                                        <Button type="submit" disabled={uploading}>
                                            {uploading ? 'Uploading...' : 'Upload'}
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    )}
                </div>
            </div>
            {newspapersLoading && <p>Loading newspapers...</p>}
            {newspapersError && <p className="text-destructive">Error loading newspapers: {newspapersError.message}</p>}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {newspapers?.map(paper => (
                    <Card key={paper.id} className='flex flex-col'>
                        <CardHeader className='flex-grow'>
                            <div className='flex items-start gap-4'>
                                <FileText className='w-8 h-8 text-primary mt-1' />
                                <div>
                                    <CardTitle className='text-base'>{paper.title}</CardTitle>
                                    <CardDescription>
                                        <a href={paper.url} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
                                            <LinkIcon className='w-3 h-3' /> View PDF
                                        </a>
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        {isAdmin && (
                            <CardContent className="p-2 border-t mt-auto">
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive" size="sm" className='w-full'>
                                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This will permanently delete the newspaper {paper.title}.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleDeleteNewspaper(paper.id, paper.url)}>
                                                Continue
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>
             {newspapers?.length === 0 && !newspapersLoading && (
                <p className='text-muted-foreground text-center col-span-full'>No newspapers have been uploaded yet.</p>
            )}
        </div>
      </div>
    </div>
  );
}
