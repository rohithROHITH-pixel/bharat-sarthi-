// @ts-nocheck
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  "projectId": "studio-424035060-99d99",
  "appId": "1:473577482068:web:38d6602d09c5d7fe018ac1",
  "apiKey": "AIzaSyB5UrirujVzi_HYIliXc5Vpk2Vd2MSM9WY",
  "authDomain": "studio-424035060-99d99.firebaseapp.com",
  "storageBucket": "studio-424035060-99d99.appspot.com",
  "messagingSenderId": "473577482068"
};

// Initialize Firebase App
// This function avoids re-initializing the app on both server and client.
function initializeFirebaseApp() {
  if (getApps().length) {
    return getApp();
  }
  return initializeApp(firebaseConfig);
}

export const firebase = initializeFirebaseApp();
