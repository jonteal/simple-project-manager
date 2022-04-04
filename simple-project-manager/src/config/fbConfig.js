// Import the functions you need from the SDKs you need
// Not sure what all is needed here and what isn't.
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.firestore().settings({ timestampsInSnapshots: true});

export default firebase;