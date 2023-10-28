
import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRjUYL_vrbtKRFuqdo0NOOquw7hryeEYk",
  authDomain: "proyecto-3c6e5.firebaseapp.com",
  projectId: "proyecto-3c6e5",
  storageBucket: "proyecto-3c6e5.appspot.com",
  messagingSenderId: "139595505500",
  appId: "1:139595505500:web:2d5c2b9bd80a65e7006b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 

