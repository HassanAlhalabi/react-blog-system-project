import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgom5b2mPK661EiY5fcnzXCYbPmXYGH4M",
  authDomain: "travel-db0df.firebaseapp.com",
  projectId: "travel-db0df",
  storageBucket: "travel-db0df.appspot.com",
  messagingSenderId: "90392450350",
  appId: "1:90392450350:web:237e81b6dc8abca11a56bf"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore();