'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { NewsArticle } from '@/types/news';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '../ui/badge';
import { Edit, Trash2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface AdminNewsListProps {
  onEditArticle: (article: NewsArticle) => void;
}

export default function AdminNewsList({ onEditArticle }: AdminNewsListProps) {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const articles: NewsArticle[] = [];
      querySnapshot.forEach((doc) => {
        articles.push({ id: doc.id, ...doc.data() } as NewsArticle);
      });
      setNews(articles);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching admin news list: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'news', id));
      toast({ title: 'Success', description: 'Article deleted successfully.' });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: (error as Error).message,
      });
    }
  };

  if (loading) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing Articles</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Existing Articles</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="rounded-md border">
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[40%]">Title</TableHead>
                    <TableHead className="hidden sm:table-cell">Category</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {news.length > 0 ? (
                        news.map((article) => (
                            <TableRow key={article.id}>
                            <TableCell className="font-medium truncate">{article.title}</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge variant="secondary">{article.category}</Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                {article.date?.toDate().toLocaleDateString()}
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end space-x-1">
                                    <Button variant="ghost" size="icon" onClick={() => onEditArticle(article)}>
                                        <Edit className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                            <Trash2 className="h-4 w-4" />
                                            <span className="sr-only">Delete</span>
                                        </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete the article.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                            onClick={() => handleDelete(article.id)}
                                            >
                                            Delete
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center h-24">No articles found.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
                </Table>
            </div>
        </CardContent>
    </Card>
  );
}
