import firebase from "firebase/app";
import "firebase/firestore"; // for the databse
import "firebase/auth"; // for the authentcation

const config = {
  apiKey: "AIzaSyBGx-KWu_gqhL3KRculVvRxtXHnH9FRu4U", // copied from project settings/firebase sdk snippet
  authDomain: "crown-db-11351.firebaseapp.com",
  projectId: "crown-db-11351",
  storageBucket: "crown-db-11351.appspot.com",
  messagingSenderId: "299030742949",
  appId: "1:299030742949:web:8e05721b5df67e8d31ca4c",
  measurementId: "G-4JVQWTS29M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
