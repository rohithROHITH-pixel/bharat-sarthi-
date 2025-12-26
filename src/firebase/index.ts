import { getApps, getApp, initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { firebase as firebaseApp } from './config';

// Re-export hooks and providers
export * from './provider';
export * from './auth/use-user';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './client-provider';


// A bit of an anti-pattern, but it's the easiest way to ensure
// that the Firebase app is initialized only once.
let app: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

if (getApps().length) {
  app = getApp();
  auth = getAuth(app);
  firestore = getFirestore(app);
} else {
  app = firebaseApp;
  auth = getAuth(app);
  firestore = getFirestore(app);
}

const firebase = { app, auth, firestore };

export function getFirebase() {
  return firebase;
}
