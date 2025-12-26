'use client';

import HeroSection from '@/components/hero-section';
import NewsList from '@/components/news-list';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { NewsArticle } from '@/lib/news-data';
import { useMemo } from 'react';

export default function Home() {
  const firestore = useFirestore();

  const newsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'news'), orderBy('createdAt', 'desc'), limit(10));
  }, [firestore]);

  const { data: newsItems, loading, error } = useCollection<NewsArticle>(newsQuery);

  const featuredNews = newsItems?.[0];
  const otherNews = newsItems?.slice(1);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading News...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <p className='text-destructive'>Error loading news articles. Please try again later.</p>
        </div>
    )
  }

  return (
    <div className="space-y-8 pb-8">
      <HeroSection article={featuredNews} />
      <div className="container mx-auto px-4">
        {otherNews && otherNews.length > 0 ? (
          <NewsList newsItems={otherNews} />
        ) : (
          !loading && <p className='text-center text-muted-foreground'>No additional news articles found.</p>
        )}
      </div>
    </div>
  );
}
