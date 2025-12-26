
import { getFirestore, doc, getDoc, Timestamp } from 'firebase/firestore';
import { firebase } from '@/firebase/config';
import { notFound } from 'next/navigation';
import { NewsArticle } from '@/lib/news-data';
import NewsArticleClient from '@/components/news-article-client';

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
      // Ensure createdAt is a serializable string
      if (data.createdAt && data.createdAt instanceof Timestamp) {
        // Just use the article time, no need to serialize timestamp
      }
      articleData = { id: docSnap.id, ...data } as NewsArticle;
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
