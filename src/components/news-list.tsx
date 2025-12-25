'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { NewsArticle } from '@/types/news';
import NewsCard from './news-card';
import { Skeleton } from './ui/skeleton';

export default function NewsList() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

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
      console.error("Error fetching news: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-3 rounded-lg border bg-card p-6 shadow-sm">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex items-center justify-between pt-4">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  if (news.length === 0) {
    return <p className="text-center text-muted-foreground py-10">No news articles found.</p>
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
