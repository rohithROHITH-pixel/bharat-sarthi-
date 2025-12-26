
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { NewsArticle } from '@/lib/news-data';

// This is a Client Component for rendering the UI
export default function NewsArticleClient({ article }: { article: NewsArticle }) {

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold">Article not found</h2>
        <p className="text-muted-foreground mt-2">
          The article you are looking for does not exist.
        </p>
      </div>
    );
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

          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-4">
            <p className="font-semibold text-lg text-foreground/90">
              {article.summary}
            </p>
            {article.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
