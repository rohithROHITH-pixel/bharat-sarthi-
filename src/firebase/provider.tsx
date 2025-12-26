'use client';
import { createContext, useContext, useMemo } from 'react';
import { getFirebase } from './index';

const FirebaseContext = createContext<ReturnType<typeof getFirebase> | null>(null);

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const firebase = useMemo(() => getFirebase(), []);

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
}

export function useFirebaseApp() {
  return useFirebase().app;
}
export function useAuth() {
  return useFirebase().auth;
}
export function useFirestore() {
  return useFirebase().firestore;
}
