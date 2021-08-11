import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAn7ncpG3evMurGC7lFo3jDvvIRHS2nWNk",
    authDomain: "true-size-store.firebaseapp.com",
    projectId: "true-size-store",
    storageBucket: "true-size-store.appspot.com",
    messagingSenderId: "746037080664",
    appId: "1:746037080664:web:e2d13bb34d8b5d8848d02d"
});

export const getFirebase = () => {
    return firebaseConfig;
}

export const getFireStore = () => {
    return firebase.firestore(firebaseConfig);
}