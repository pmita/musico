import firebase from "firebase";
// SERVICES
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_s4Ilsc2fa37WwiL7NrLMjzVca1Tsym4",
    authDomain: "musico-co.firebaseapp.com",
    projectId: "musico-co",
    storageBucket: "musico-co.appspot.com",
    messagingSenderId: "404650315191",
    appId: "1:404650315191:web:6cefdba341abc513a26c32"
  };

  firebase.initializeApp(firebaseConfig);

  //Init services
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export { projectFirestore, projectAuth };