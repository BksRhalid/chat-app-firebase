// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqtHf4xmKJZEZv98SnQtpufZSSBnHfPvs",
  authDomain: "chat-app-1001.firebaseapp.com",
  projectId: "chat-app-1001",
  storageBucket: "chat-app-1001.appspot.com",
  messagingSenderId: "530357550339",
  appId: "1:530357550339:web:b63f3e4b7b65c00f25fd36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)