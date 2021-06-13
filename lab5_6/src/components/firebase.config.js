import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCWroqbSfZDMKXzXeqjciWHT0W5TUkqjWw",
    authDomain: "piw-tinder-dla-projektow.firebaseapp.com",
    projectId: "piw-tinder-dla-projektow",
    storageBucket: "piw-tinder-dla-projektow.appspot.com",
    messagingSenderId: "771430009759",
    appId: "1:771430009759:web:9191765cc633eb20068baa"
  };  

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export const auth = firebase.auth();

export default db;