import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const firebaseConfig = {

  apiKey:
  "AIzaSyDbZ4HcOad1e5oweBZnr8k_pfx20yD7Wxw",

  authDomain:
  "mfz-learning-2944d.firebaseapp.com",

  projectId:
  "mfz-learning-2944d",

  storageBucket:
  "mfz-learning-2944d.firebasestorage.app",

  messagingSenderId:
  "630975596783",

  appId:
  "1:630975596783:web:3dcd8573d18ee232eab31a"

};


const app = initializeApp(
  firebaseConfig
);


const db = getFirestore(
  app
);


const auth = getAuth(
  app
);


export {
  db,
  auth
};
