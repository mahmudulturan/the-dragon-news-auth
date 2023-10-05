// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADeXDhRUy11fnpGU2KzJ7_GXoqnQ8dEeQ",
  authDomain: "the-dragon-news-auth-a0895.firebaseapp.com",
  projectId: "the-dragon-news-auth-a0895",
  storageBucket: "the-dragon-news-auth-a0895.appspot.com",
  messagingSenderId: "710553824051",
  appId: "1:710553824051:web:3cefa53092a0f3d7b86c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;