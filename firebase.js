import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQhegaar-XB4ns4EwG7hZij9TXbeAAWVo',
  authDomain: 'mobilechatapp-a7a52.firebaseapp.com',
  databaseURL: 'https://mobilechatapp-a7a52.firebaseio.com ',
  projectId: 'mobilechatapp-a7a52',
  storageBucket: 'mobilechatapp-a7a52.appspot.com',
  messagingSenderId: '950779370214',
  appId: '1:950779370214:web:1f66fe3901469dddfd7927',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
