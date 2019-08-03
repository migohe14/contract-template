import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDnN6yO7q2OGooret0YOKl9O-Kvp1KEU9Q",
    authDomain: "creamicontrato.firebaseapp.com",
    databaseURL: "https://creamicontrato.firebaseio.com",
    projectId: "creamicontrato",
    storageBucket: "creamicontrato.appspot.com",
    messagingSenderId: "8535832926",
    appId: "1:8535832926:web:c871e98d79628abb"
};

const firebaseapp = firebase.initializeApp(config);
export default firebaseapp.firestore();