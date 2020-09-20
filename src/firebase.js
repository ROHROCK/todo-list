import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDWDUm3-A47kie9JXzdwk1R3GsFl-RJ1a4",
  authDomain: "tiktokclone-72e5d.firebaseapp.com",
  databaseURL: "https://tiktokclone-72e5d.firebaseio.com",
  projectId: "tiktokclone-72e5d",
  storageBucket: "tiktokclone-72e5d.appspot.com",
  messagingSenderId: "892502249733",
  appId: "1:892502249733:web:c544bbd5c598bb3495e76c",
});

export { firebaseConfig as firebase };
