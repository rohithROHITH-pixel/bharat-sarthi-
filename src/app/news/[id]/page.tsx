'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useDoc, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import { NewsArticle } from '@/lib/news-data';
import { useMemo } from 'react';

export default function NewsArticlePage() {
  const params = useParams();
  const firestore = useFirestore();
  const articleId = typeof params.id === 'string' ? params.id : '';

  const articleRef = useMemo(() => {
      if (!firestore || !articleId) return null;
      return doc(firestore, 'news', articleId);
  }, [firestore, articleId]);
  
  const { data: article, loading, error } = useDoc<NewsArticle>(articleRef);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading Article...</p>
        </div>
      </div>
    );
  }

  if (!article && !loading) {
    notFound();
  }
  
  if (error) {
      return <p className='text-center text-destructive'>Error loading article: {error.message}</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {article && (
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
                  <p className="font-semibold text-lg text-foreground/90">{article.summary}</p>
                  {/* Split content by newline to render paragraphs */}
                  {article.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
