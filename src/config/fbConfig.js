import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgom5b2mPK661EiY5fcnzXCYbPmXYGH4M",
  authDomain: "travel-db0df.firebaseapp.com",
  projectId: "travel-db0df",
  storageBucket: "travel-db0df.appspot.com",
  messagingSenderId: "90392450350",
  appId: "1:90392450350:web:237e81b6dc8abca11a56bf"
};

// Inititialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Firebase Firestore
export const firebaseDB  = getFirestore();
export const getArticles = async () => {
  const articles = [];
  const querySnapshot = await getDocs(collection(firebaseDB, "articles"));
  querySnapshot.forEach((doc) => {
    articles.push(doc.data());
  });
  return articles
}

// Firebase Storage
export const firebaseStorage  = getStorage();
export const storageRef       = ref(firebaseStorage,'images');
export const listRef          = ref(firebaseStorage);