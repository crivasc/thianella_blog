import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrKueXxR-xk7KqaCP6WWwHlaD5lGJ9ASA",
    authDomain: "thianella-42f63.firebaseapp.com",
    databaseURL: "https://thianella-42f63-default-rtdb.firebaseio.com",
    projectId: "thianella-42f63",
    storageBucket: "thianella-42f63.appspot.com",
    messagingSenderId: "1029883663033",
    appId: "1:1029883663033:web:ecd443ed9250ad26488168"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  export { auth, db };