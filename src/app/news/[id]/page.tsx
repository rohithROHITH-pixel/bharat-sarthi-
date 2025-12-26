import { getFirestore, doc, getDoc, Timestamp } from 'firebase/firestore';
import { firebase } from '@/firebase/config';
import { notFound } from 'next/navigation';
import { NewsArticle } from '@/lib/news-data';
import NewsArticleClient from '@/components/news-article-client';

// Helper function to convert any Timestamps to serializable strings
const convertTimestamps = (data: any): any => {
    if (!data) return data;
    if (data instanceof Timestamp) {
        return data.toDate().toISOString();
    }
    if (Array.isArray(data)) {
        return data.map(convertTimestamps);
    }
    if (typeof data === 'object') {
        const newData: { [key: string]: any } = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                newData[key] = convertTimestamps(data[key]);
            }
        }
        return newData;
    }
    return data;
};

// This is a server component for fetching data
export default async function NewsArticlePage({ params }: { params: { id: string } }) {
  const articleId = params.id;

  // Initialize Firestore on the server
  const firestore = getFirestore(firebase);
  
  let articleData: NewsArticle | null = null;
  let error = null;

  try {
    const docRef = doc(firestore, 'news', articleId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      // Ensure data is serializable before passing to client component
      articleData = convertTimestamps({ id: docSnap.id, ...data }) as NewsArticle;
    } else {
        notFound();
    }
  } catch (e: any) {
    console.error("Error fetching document on server:", e);
    error = e.message;
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-destructive">
        Error loading article: {error}
      </div>
    );
  }

  if (!articleData) {
      notFound();
  }

  // Pass the fetched data to a Client Component for rendering
  return <NewsArticleClient article={articleData} />;
}
