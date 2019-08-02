import Firebase from 'firebase';

const firebaseapp = Firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

export const db = firebaseapp.database();
