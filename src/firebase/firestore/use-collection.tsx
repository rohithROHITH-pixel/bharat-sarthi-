'use client';
import { useEffect, useState, useCallback } from 'react';
import {
  onSnapshot,
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

  const [refetchCount, setRefetchCount] = useState(0);

  const refetch = useCallback(() => {
    setRefetchCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      setData([]); // Set to empty array for consistency
      return;
    }
    
    setLoading(true);

    const unsubscribe = onSnapshot(
      query,
      (snapshot: QuerySnapshot<T>) => {
        const items = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as T));
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
    // The query object is now memoized in the components that use this hook.
  }, [query, refetchCount]);

  return { data, loading, error, refetch };
}
