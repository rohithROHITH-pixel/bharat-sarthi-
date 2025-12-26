'use server';

import HeroSection from '@/components/hero-section';
import NewsList from '@/components/news-list';
import { getFirestore, collection, query, orderBy, limit, getDocs, Timestamp } from 'firebase/firestore';
import { firebase } from '@/firebase/config';
import { NewsArticle } from '@/lib/news-data';
import { convertTimestamps } from '@/lib/utils';


async function getNews() {
    const firestore = getFirestore(firebase);
    const newsQuery = query(collection(firestore, 'news'), orderBy('createdAt', 'desc'), limit(5));
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


export default async function Home() {
  const newsItems = await getNews();

  const featuredNews = newsItems?.[0];
  const otherNews = newsItems?.slice(1);

  return (
    <div className="space-y-8 pb-8">
      <HeroSection article={featuredNews} />
      <div className="container mx-auto px-4">
        {otherNews && otherNews.length > 0 ? (
          <>
            <h2 className="text-3xl font-bold font-headline mb-8 border-b-4 border-primary pb-2">
                Latest News
            </h2>
            <NewsList newsItems={otherNews} />
          </>
        ) : (
          !featuredNews && <p className='text-center text-muted-foreground pt-8'>No news articles found. Add some in the admin panel.</p>
        )}
         {featuredNews && (!otherNews || otherNews.length === 0) && (
            <p className='text-center text-muted-foreground pt-8'>No additional news articles found.</p>
        )}
      </div>
    </div>
  );
}
