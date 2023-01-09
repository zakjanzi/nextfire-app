import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
// throwing error
// export const firestore = firebase.firestore();


// Storage exports
// throwing error
// export const storage = firebase.storage();












