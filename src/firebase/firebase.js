import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDl_TaYtHmEbfxpSWiw8WvBeX_zKdgI3hI",
  authDomain: "netflix-6360c.firebaseapp.com",
  projectId: "netflix-6360c",
  storageBucket: "netflix-6360c.appspot.com",
  messagingSenderId: "1029244818317",
  appId: "1:1029244818317:web:fff3f0fbd8583d71e6e3c4"
};

const  app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { auth };
export default db;