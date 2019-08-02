import Firebase from 'firebase';

const firebaseapp = Firebase.initializeApp({
    apiKey: "AIzaSyDnN6yO7q2OGooret0YOKl9O-Kvp1KEU9Q",
    authDomain: "creamicontrato.firebaseapp.com",
    databaseURL: "https://creamicontrato.firebaseio.com",
    projectId: "creamicontrato",
    storageBucket: "creamicontrato.appspot.com",
    messagingSenderId: "8535832926",
    appId: "1:8535832926:web:c871e98d79628abb"
});

export const db = firebaseapp.database();
