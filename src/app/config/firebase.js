import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCNuffTPsa1Q0BWpwGlmolZvx47Yk44oLU",
    authDomain: "realevents-138c2.firebaseapp.com",
    databaseURL: "https://realevents-138c2.firebaseio.com",
    projectId: "realevents-138c2",
    storageBucket: "realevents-138c2.appspot.com",
    messagingSenderId: "226717475427",
    appId: "1:226717475427:web:e9d9858b87c779b5d78e56"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;