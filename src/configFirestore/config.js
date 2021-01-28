import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore'

const app =firebase.initializeApp({
    apiKey: "AIzaSyC1qqjY5pnA31imYdzmWet6vzHfIQcFjws",
    authDomain: "reactjsprueba.firebaseapp.com",
    databaseURL: "https://reactjsprueba.firebaseio.com",
    projectId: "reactjsprueba",
    storageBucket: "reactjsprueba.appspot.com",
    messagingSenderId: "339577359819",
    appId: "1:339577359819:web:3973ef6af0d54a6dcffa4e"
});

// autenticacion
const Autentication = app.auth();

export {
    Autentication  
}