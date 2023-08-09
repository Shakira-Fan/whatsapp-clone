import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtw9MZ8s197iid2zWHdrUGDkvT9O1tpPw",
    authDomain: "whatsapp-clone-394007.firebaseapp.com",
    projectId: "whatsapp-clone-394007",
    storageBucket: "whatsapp-clone-394007.appspot.com",
    messagingSenderId: "563419768599",
    appId: "1:563419768599:web:23bce54cc3a4091be73952"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db}