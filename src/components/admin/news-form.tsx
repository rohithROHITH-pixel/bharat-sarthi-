'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { NewsArticle } from '@/types/news';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const formSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  content: z.string().min(20, 'Content must be at least 20 characters long.'),
  category: z.string().min(2, 'Category must be at least 2 characters long.'),
});

interface NewsFormProps {
  editingArticle: NewsArticle | null;
  onFinished: () => void;
}

export default function NewsForm({ editingArticle, onFinished }: NewsFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
      category: '',
    },
  });

  useEffect(() => {
    if (editingArticle) {
      form.reset({
        title: editingArticle.title,
        content: editingArticle.content,
        category: editingArticle.category,
      });
    } else {
        form.reset({
            title: '',
            content: '',
            category: '',
        });
    }
  }, [editingArticle, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!auth.currentUser) {
      toast({ variant: 'destructive', title: 'Error', description: 'You must be logged in.' });
      return;
    }
    setIsSubmitting(true);
    try {
      if (editingArticle) {
        const articleRef = doc(db, 'news', editingArticle.id);
        await updateDoc(articleRef, { ...values });
        toast({ title: 'Success', description: 'Article updated successfully.' });
      } else {
        await addDoc(collection(db, 'news'), {
          ...values,
          date: serverTimestamp(),
          createdBy: auth.currentUser.uid,
        });
        toast({ title: 'Success', description: 'Article added successfully.' });
      }
      form.reset();
      onFinished();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: (error as Error).message,
      });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">{editingArticle ? 'Edit Article' : 'Add New Article'}</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                        <Input placeholder="Article Title" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                        <Input placeholder="e.g., Politics, Technology" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Full article content..." {...field} rows={10} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="flex justify-end space-x-2">
                    {editingArticle && (
                        <Button type="button" variant="outline" onClick={onFinished}>Cancel</Button>
                    )}
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting 
                        ? (editingArticle ? 'Updating...' : 'Adding...')
                        : (editingArticle ? 'Update Article' : 'Add Article')}
                    </Button>
                </div>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
