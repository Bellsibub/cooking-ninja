import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9oPlabvspFL3JlwCpbKmEGiDRYr5Vcj8',
  authDomain: 'cooking-ninja-301d8.firebaseapp.com',
  projectId: 'cooking-ninja-301d8',
  storageBucket: 'cooking-ninja-301d8.appspot.com',
  messagingSenderId: '1088607135659',
  appId: '1:1088607135659:web:501c891236cb6ef09794ee',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const db = firebase.firestore();

export { db };
