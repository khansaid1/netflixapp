
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfAyptNe_f3oxh6fsZ99eur2p3aLTmQKA",
  authDomain: "netflix-project-a064f.firebaseapp.com",
  projectId: "netflix-project-a064f",
  storageBucket: "netflix-project-a064f.appspot.com",
  messagingSenderId: "59760466358",
  appId: "1:59760466358:web:504db4f62b1208d99a8917",
  measurementId: "G-7JCM413RXD"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);