'use client';
import { useEffect, useState, useCallback } from 'react';
import {
  onSnapshot,
  Query,
  DocumentData,
  FirestoreError,
  QuerySnapshot,
  Timestamp,
} from 'firebase/firestore';

export interface UseCollectionOptions<T> {
  // Define any options here
}

// Helper function to recursively convert Timestamps to ISO strings
const convertTimestamps = (data: any): any => {
  if (data instanceof Timestamp) {
    return data.toDate().toISOString();
  }
  if (Array.isArray(data)) {
    return data.map(convertTimestamps);
  }
  if (data !== null && typeof data === 'object') {
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
        const items = snapshot.docs.map(doc => {
            const docData = doc.data();
            // Convert any Timestamps to serializable strings
            const serializableData = convertTimestamps(docData);
            return { ...serializableData, id: doc.id } as T;
        });
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
