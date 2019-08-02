import Firebase from 'firebase';

const firebaseapp = Firebase.initializeApp({

});

export const db = firebaseapp.database();
