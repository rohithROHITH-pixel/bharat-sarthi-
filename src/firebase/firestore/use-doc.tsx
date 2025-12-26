'use client';
import { useEffect, useState, useMemo } from 'react';
import {
  doc,
  onSnapshot,
  DocumentReference,
  DocumentData,
  FirestoreError,
  DocumentSnapshot,
} from 'firebase/firestore';
import { useFirestore } from '../provider';

export interface UseDocOptions<T> {
  // Define any options here
}

export function useDoc<T>(
  path: string | null,
  options?: UseDocOptions<T>
) {
  const firestore = useFirestore();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FirestoreError | null>(null);
  
  const docRef = useMemo(() => {
    if (!firestore || !path) return null;
    return doc(firestore, path) as DocumentReference<T, DocumentData>;
  }, [firestore, path]);


  useEffect(() => {
    if (!docRef) {
      setData(null);
      setLoading(false);
      return;
    }
    
    setLoading(true);

    const unsubscribe = onSnapshot(
      docRef,
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
  }, [docRef]);

  return { data, loading, error };
}
