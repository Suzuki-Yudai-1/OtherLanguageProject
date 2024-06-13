
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ZVX29xUmqK55iCl7IVezCe90gEoLm-E",
  authDomain: "image-uploder-2e9ff.firebaseapp.com",
  projectId: "image-uploder-2e9ff",
  storageBucket: "image-uploder-2e9ff.appspot.com",
  messagingSenderId: "729615396091",
  appId: "1:729615396091:web:5db4df7b85482d9887945e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;