// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5MF_GlaGyqIOt7MVZxhj7O-LGrsaPbqA",
  authDomain: "miniblog-c8597.firebaseapp.com",
  projectId: "miniblog-c8597",
  storageBucket: "miniblog-c8597.appspot.com",
  messagingSenderId: "520154186128",
  appId: "1:520154186128:web:0be4e73573f94b37417315",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
