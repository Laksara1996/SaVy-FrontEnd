import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    // copy and paste your firebase credential here
    apiKey: "AIzaSyDiAX_7FUgHB14i5pbAf-BkcAQR_f5n3YA",
    authDomain: "savy-29225.firebaseapp.com",
    databaseURL: "https://savy-29225.firebaseio.com",
    projectId: "savy-29225",
    storageBucket: "savy-29225.appspot.com",
    messagingSenderId: "821281703539"
    //appId: "1:821281703539:web:1cd6b334de82c44e"

});

const db = firebaseApp.firestore();

export { firebaseApp,db };

