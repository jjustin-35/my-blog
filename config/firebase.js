import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBxajWQvUCYrlk5Dm6oyO5L4rqqJXcrpk8',
  authDomain: 'blog-fe915.firebaseapp.com',
  databaseURL: 'https://blog-fe915-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'blog-fe915',
  storageBucket: 'blog-fe915.appspot.com',
  messagingSenderId: '424126691565',
  appId: '1:424126691565:web:c076e3b371145844ce74e4',
  measurementId: 'G-KPZ5K1PT5G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
