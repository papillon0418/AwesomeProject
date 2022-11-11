// import {initializeApp} from "firebase/app"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const firebaseConfig = {
//     apiKey: "AIzaSyANuZqGncptsZeWOZMC4j5doYl9FEopFRI",
//     authDomain: "rub-job-ff7a2.firebaseapp.com",
//     projectId: "rub-job-ff7a2",
//     storageBucket: "rub-job-ff7a2.appspot.com",
//     messagingSenderId: "776672616101",
//     appId: "1:776672616101:web:e1c43106e9bb23ab66b74c",
//     measurementId: "G-NS4V07WFXD"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app)

// export default app;

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyANuZqGncptsZeWOZMC4j5doYl9FEopFRI",
//   authDomain: "rub-job-ff7a2.firebaseapp.com",
//   projectId: "rub-job-ff7a2",
//   storageBucket: "rub-job-ff7a2.appspot.com",
//   messagingSenderId: "776672616101",
//   appId: "1:776672616101:web:e1c43106e9bb23ab66b74c",
//   measurementId: "G-NS4V07WFXD"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANuZqGncptsZeWOZMC4j5doYl9FEopFRI",
  authDomain: "rub-job-ff7a2.firebaseapp.com",
  projectId: "rub-job-ff7a2",
  storageBucket: "rub-job-ff7a2.appspot.com",
  messagingSenderId: "776672616101",
  appId: "1:776672616101:web:e1c43106e9bb23ab66b74c",
  measurementId: "G-NS4V07WFXD",
};

// Init
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   apiKey: "AIzaSyANuZqGncptsZeWOZMC4j5doYl9FEopFRI",
//   authDomain: "rub-job-ff7a2.firebaseapp.com",
//   projectId: "rub-job-ff7a2",
//   storageBucket: "rub-job-ff7a2.appspot.com",
//   messagingSenderId: "776672616101",
//   appId: "1:776672616101:web:e1c43106e9bb23ab66b74c",
//   measurementId: "G-NS4V07WFXD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);
