import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAnEArtd7UTylweG9rbhopcPXjA0z2Up-I",
    authDomain: "nutech-test-2fd0e.firebaseapp.com",
    databaseURL: "https://nutech-test-2fd0e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nutech-test-2fd0e",
    storageBucket: "nutech-test-2fd0e.appspot.com",
    messagingSenderId: "374380942249",
    appId: "1:374380942249:web:23cbfe65df530152b5eab8"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
export const storage = getStorage(firebase);
