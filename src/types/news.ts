import type { Timestamp, FieldValue } from 'firebase/firestore';

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  date: Timestamp;
  createdBy: string;
}

export interface NewsArticleCreate {
  title: string;
  content: string;
  category: string;
  date: FieldValue;
  createdBy: string;
}
