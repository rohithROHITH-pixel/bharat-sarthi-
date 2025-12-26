'use client';

import { useUser, useAuth } from '@/firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FormEvent, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import NewsList from '@/components/news-list';
import { PlusCircle, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { useCollection } from '@/firebase';
import { collection, deleteDoc, doc, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
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
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';

// 1. Go to your Firebase project -> Authentication -> Users tab.
// 2. Copy the UID for your admin user account.
// 3. Paste the UID here to grant admin privileges.
const ADMIN_USER_ID = "LDvQPgjj26PAoWzyBHm6aNe3vsv2";

export default function AdminPage() {
  const { user, loading } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const { toast } = useToast();
  const firestore = useFirestore();

  const isAdmin = user && user.uid === ADMIN_USER_ID;

  const { data: newsItems, loading: newsLoading, error: newsError } = useCollection<NewsArticle>(
    firestore ? query(collection(firestore, 'news'), orderBy('createdAt', 'desc')) : null
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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!auth) return;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: 'Login Successful', description: 'Welcome back!' });
    } catch (err: any) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
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
  
  const handleDelete = async (id: string) => {
    if (!firestore) return;
    try {
      await deleteDoc(doc(firestore, 'news', id));
      toast({ title: 'News Deleted', description: 'The article has been removed.' });
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Error', description: 'Could not delete article.' });
    }
  };
  
  const handleUploadDailyNews = () => {
    alert("Admin verified. Ready to implement daily newspaper upload functionality.");
  };


  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the admin panel.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm font-medium text-destructive">{error}</p>}
              <Button type="submit" className="w-full">Login</Button>
            </form>
          </CardContent>
        </Card>
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
      <div className='space-y-8'>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-center sm:text-left w-full sm:w-auto">Manage News</h2>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                {isAdmin && (
                    <Button onClick={handleUploadDailyNews} className="w-full sm:w-auto" variant="outline">
                        <Upload className="mr-2 h-4 w-4" /> Upload Daily News Paper
                    </Button>
                )}
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
            </div>
        </div>
        {newsLoading && <p>Loading news...</p>}
        {newsError && <p className="text-destructive">Error loading news: {newsError.message}</p>}
        {newsItems && <NewsList isAdmin={true} newsItems={newsItems} onDelete={handleDelete} />}
      </div>
    </div>
  );
}
