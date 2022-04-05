// Import the functions you need from the SDKs you need
// Not sure what all is needed here and what isn't.
import firebase from 'firebase/app';
import { getFirestore } from 'redux-firestore';
// import 'firebase/firestore'
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import 'firebase/auth'
import { initializeApp } from "firebase/app";
// import { getFirebase } from 'react-redux-firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHzf39nb-Yd4e8yUhep6nFhLRwvGd-CpA",
    authDomain: "simpleprojectmanager-b35a9.firebaseapp.com",
    projectId: "simpleprojectmanager-b35a9",
    storageBucket: "simpleprojectmanager-b35a9.appspot.com",
    messagingSenderId: "442784645645",
    appId: "1:442784645645:web:443b94d99f1b7524ba8b44",
    measurementId: "G-0F8PH81SYX"
};

// Initialize Firebase
// I don't think this firestore thing is going to work out.
const app = initializeApp(firebaseConfig);
firebaseConfig.firestore().settings({ timestampsInSnapshots: true});

export default getFirestore();