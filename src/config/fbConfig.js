import { initializeApp } from "firebase/app";
import { getFirestore,
         getDocs,
         getDoc,
         collection,
         doc, 
         setDoc, 
         deleteDoc, 
         updateDoc } from 'firebase/firestore';
import { getStorage, 
         ref } from "firebase/storage";

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

// ************* Firebase Firestore ************** //

// Get Firestore
export const firebaseDB  = getFirestore();

// Get Articles From Firestore
export const getArticles = async () => {
  const articles = [];
  const querySnapshot = await getDocs(collection(firebaseDB, "articles"))
  querySnapshot.forEach((doc) => {
    articles.push(doc.data());
  });
  return articles
}
// Get an Article From Firestore
export const fireGetArticle = async id => {
  const docSnap = await getDoc(doc(firebaseDB, "articles",id));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null
  }
}
// Add New Article
export const uploadArticle = async article => {
  const response = await setDoc(doc(firebaseDB, "articles",article.id), article);
  return response;
} 
// Remove Article to Trash
export const fireArticleRemove = async id => {
  const response = await updateDoc(doc(firebaseDB,'articles',id),{inTrash: true});
} 
// Delete Article
export const fireArticleDelete = async id => {
  const response = await deleteDoc(doc(firebaseDB,'articles',id));
}
export const fireArticleUpdate = async (id,props) => {
  const response = await updateDoc(doc(firebaseDB,'articles',id),props);
}

// ***************** Firebase Storage **************** //

export const firebaseStorage  = getStorage();
export const storageRef       = ref(firebaseStorage,'images');
export const listRef          = ref(firebaseStorage);