import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB37sXXkhq_myBW0N4jmH88mAi_8qOj9Uk",
  authDomain: "clone-d6ee3.firebaseapp.com",
  projectId: "clone-d6ee3",
  storageBucket: "clone-d6ee3.appspot.com",
  messagingSenderId: "26538170644",
  appId: "1:26538170644:web:1d05b8c6abd257cffcca01"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { auth, db, storage };