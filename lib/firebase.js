import firebase  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC5nvK5bq5H7mAMZ5zcUEs2YG6AslPN3zw",
    authDomain: "nextfire-e7476.firebaseapp.com",
    projectId: "nextfire-e7476",
    storageBucket: "nextfire-e7476.appspot.com",
    messagingSenderId: "1079584308062",
    appId: "1:1079584308062:web:d9703e462ab9c2619aedcf"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();