'use client';

import { NewsArticle } from '@/types/news';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from './ui/scroll-area';

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  const shortDescription = article.content.substring(0, 100) + (article.content.length > 100 ? '...' : '');
  const articleDate = article.date?.toDate().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="h-14 overflow-hidden">{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription>{shortDescription}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
            <span>{articleDate}</span>
            <Badge variant="outline" className="border-accent bg-accent/20 text-accent-foreground">{article.category}</Badge>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold font-headline">{article.title}</DialogTitle>
          <div className="flex items-center space-x-4 pt-2 text-sm text-muted-foreground">
            <span>{articleDate}</span>
            <Badge variant="outline" className="border-accent bg-accent/20 text-accent-foreground">{article.category}</Badge>
          </div>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-6">
            <div className="whitespace-pre-wrap py-4 text-foreground text-base leading-relaxed">
              {article.content}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
