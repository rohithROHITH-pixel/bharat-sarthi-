'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { newsItems } from '@/lib/news-data';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function NewsArticlePage() {
  const params = useParams();
  const { id } = params;

  const articleId = typeof id === 'string' ? parseInt(id, 10) : undefined;
  const article = newsItems.find((item) => item.id === articleId);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
            <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                data-ai-hint={article.imageHint}
                priority
            />
        </div>
        <CardContent className="p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                <Badge variant="default">{article.category}</Badge>
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.time}</span>
                </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-primary">
                {article.title}
            </h1>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
                <p>{article.summary}</p>
                 {/* This is a placeholder for more content. 
                     In a real app, you'd have a 'content' field in your data. 
                */}
                <p>
                    {article.summary}
                </p>
                <p>
                    {article.summary}
                </p>

            </div>
        </CardContent>
      </Card>
    </div>
  );
}
