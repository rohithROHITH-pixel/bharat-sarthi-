'use client';
import { useEffect, useState, useRef } from 'react';
import {
  doc,
  onSnapshot,
  DocumentReference,
  DocumentData,
  FirestoreError,
  DocumentSnapshot,
} from 'firebase/firestore';

export interface UseDocOptions<T> {
  // Define any options here
}

export function useDoc<T>(
  ref: DocumentReference<T, DocumentData> | null,
  options?: UseDocOptions<T>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FirestoreError | null>(null);
  
  const refRef = useRef(ref);
  refRef.current = ref;

  useEffect(() => {
    if (!refRef.current) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      refRef.current,
      (snapshot: DocumentSnapshot<T>) => {
        if (snapshot.exists()) {
          setData({ id: snapshot.id, ...snapshot.data() });
        } else {
          setData(null);
        }
        setLoading(false);
      },
      (err: FirestoreError) => {
        console.error("Error fetching document:", err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [refRef.current]);

  return { data, loading, error };
}
