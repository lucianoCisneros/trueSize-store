import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA-1RpqmD1mCBn8arCHvHCb7Bc05TmfxOU",
    authDomain: "truesize-store.firebaseapp.com",
    projectId: "truesize-store",
    storageBucket: "truesize-store.appspot.com",
    messagingSenderId: "1069310409024",
    appId: "1:1069310409024:web:dd096448707570632562a5"
});

export const getFirebase = () => {
    return firebaseConfig;
}

export const getFireStore = () => {
    return firebase.firestore(firebaseConfig);
}