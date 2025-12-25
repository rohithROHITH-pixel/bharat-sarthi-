'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog';
import { type NewsArticle } from '@/lib/news-data';

type NewsListProps = {
  newsItems: NewsArticle[];
  isAdmin?: boolean;
};

export default function NewsList({ newsItems, isAdmin = false }: NewsListProps) {
    const handleDelete = (id: number) => {
        // Here you would typically call an API to delete the news item.
        // For this example, we'll just log it.
        console.log(`Deleting news item with id: ${id}`);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.length > 0 ? (
                newsItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                        <Link href="#" className="flex-grow">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={item.imageHint}
                                />
                            </div>
                            <CardHeader className="p-4">
                                <Badge variant="secondary" className="mb-2 w-fit text-xs">{item.category}</Badge>
                                <CardTitle className="text-md font-bold leading-snug line-clamp-2">{item.title}</CardTitle>
                            </CardHeader>
                        </Link>
                        {isAdmin && (
                            <CardFooter className="border-t p-2">
                                <div className="flex w-full justify-end gap-2">
                                    <Button variant="outline" size="sm">
                                        <Pencil className="mr-2 h-4 w-4" /> Edit
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="destructive" size="sm">
                                                <Trash2 className="mr-2 h-4 w-4" /> Delete
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete the news article.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => handleDelete(item.id)}>
                                                    Continue
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardFooter>
                        )}
                    </Card>
                ))
            ) : (
                <div className="col-span-full text-center py-12">
                    <p className="text-lg text-muted-foreground">ಈ ವರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಸುದ್ದಿ ಲಭ್ಯವಿಲ್ಲ.</p>
                </div>
            )}
        </div>
    );
}
