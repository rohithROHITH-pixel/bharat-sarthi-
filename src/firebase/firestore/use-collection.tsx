'use client';
import { useEffect, useState, useRef } from 'react';
import {
  collection,
  onSnapshot,
  query,
  where,
  Query,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
} from 'firebase/firestore';

export interface UseCollectionOptions<T> {
  // Define any options here
}

export function useCollection<T>(
  query: Query<T, DocumentData> | null,
  options?: UseCollectionOptions<T>
) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  const queryRef = useRef(query);
  queryRef.current = query;

  useEffect(() => {
    if (!queryRef.current) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      queryRef.current,
      (snapshot: QuerySnapshot<T>) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(items);
        setLoading(false);
      },
      (err: FirestoreError) => {
        console.error("Error fetching collection:", err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [queryRef.current]);

  return { data, loading, error };
}
