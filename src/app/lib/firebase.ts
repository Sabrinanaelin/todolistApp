import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: "AIzaSyD3wRfvR563pLIKCkbZzhclFxUkAAKywUg",
  authDomain: "sabrinatodolist-4a9b0.firebaseapp.com",
  projectId: "sabrinatodolist-4a9b0",
  storageBucket: "sabrinatodolist-4a9b0.firebasestorage.app",
  messagingSenderId: "157081500741",
  appId: "1:157081500741:web:f8a9e4499e72404740772c",
  measurementId: "G-9H7T4TGDN2",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
