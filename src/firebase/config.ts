// @ts-nocheck
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  "projectId": "studio-424035060-99d99",
  "appId": "1:473577482068:web:38d6602d09c5d7fe018ac1",
  "apiKey": "AIzaSyB5UrirujVzi_HYIliXc5Vpk2Vd2MSM9WY",
  "authDomain": "studio-424035060-99d99.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "473577482068"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export { app };
