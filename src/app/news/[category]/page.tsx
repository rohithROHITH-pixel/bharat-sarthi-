'use client';

import { useParams, notFound } from 'next/navigation';
import NewsList from '@/components/news-list';
import { useCollection, useFirestore } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { NewsArticle } from '@/lib/news-data';
import { useMemo } from 'react';

// Helper to capitalize first letter
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function CategoryNewsPage() {
  const params = useParams();
  const firestore = useFirestore();
  const category = useMemo(() => {
    if (typeof params.category !== 'string') return null;
    // The URLs are lowercase, but categories in the DB might be capitalized.
    // We'll search for the capitalized version.
    // e.g. /news/sports -> "Sports"
    return capitalize(params.category);
  }, [params.category]);

  const newsQuery = useMemo(() => {
    if (!firestore || !category) return null;
    return query(collection(firestore, 'news'), where('category', '==', category));
  }, [firestore, category]);

  const { data: newsItems, loading, error } = useCollection<NewsArticle>(newsQuery);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-[calc(100vh-20rem)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading {category} News...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-destructive">Error loading news articles. Please try again later.</p>
      </div>
    );
  }
  
  // This handles both invalid category slugs and categories with no articles.
  if (!loading && (!newsItems || newsItems.length === 0)) {
     return (
        <div className="container mx-auto px-4 py-8 text-center">
             <h1 className="text-3xl font-bold mb-4">No News Found</h1>
             <p className="text-muted-foreground">There are no articles in the "{category}" category at the moment.</p>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-headline mb-8 border-b pb-4 text-primary">
        {category}
      </h1>
      <NewsList newsItems={newsItems || []} />
    </div>
  );
}
