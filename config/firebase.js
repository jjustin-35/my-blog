import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: 'blog-fe915.firebaseapp.com',
  databaseURL: 'https://blog-fe915-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'blog-fe915',
  storageBucket: 'blog-fe915.appspot.com',
  messagingSenderId: '424126691565',
  appId: process.env.FIREBASE_APPID,
  measurementId: 'G-KPZ5K1PT5G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
