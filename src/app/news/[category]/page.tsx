'use server';

import NewsList from '@/components/news-list';
import { getFirestore, collection, query, where, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { firebase } from '@/firebase/config';
import { NewsArticle } from '@/lib/news-data';
import { convertTimestamps } from '@/lib/utils';
import { notFound } from 'next/navigation';


// Helper to capitalize first letter
const capitalize = (s: string) => {
    if (typeof s !== 'string' || !s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
}

async function getNewsForCategory(categoryParam: string | string[]) {
    const category = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;
    if (typeof category !== 'string') {
        return [];
    }
    
    const capitalizedCategory = capitalize(decodeURIComponent(category));

    const firestore = getFirestore(firebase);
    const newsQuery = query(
        collection(firestore, 'news'),
        where('category', '==', capitalizedCategory),
        orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(newsQuery);

    if (snapshot.empty) {
        return [];
    }

    const newsItems = snapshot.docs.map(doc => {
        const data = doc.data();
        const serializableData = convertTimestamps(data);
        return { id: doc.id, ...serializableData } as NewsArticle;
    });

    return newsItems;
}

export default async function CategoryNewsPage({ params }: { params: { category: string } }) {
  if (!params.category) {
      notFound();
  }

  const newsItems = await getNewsForCategory(params.category);
  const categoryName = capitalize(decodeURIComponent(params.category));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-headline mb-8 border-b pb-4 text-primary">
        {categoryName}
      </h1>
      {newsItems && newsItems.length > 0 ? (
          <NewsList newsItems={newsItems} />
      ) : (
         <div className="text-center py-10">
             <h2 className="text-2xl font-bold mb-4">No News Found</h2>
             <p className="text-muted-foreground">There are no articles in the "{categoryName}" category at the moment.</p>
        </div>
      )}
    </div>
  );
}
