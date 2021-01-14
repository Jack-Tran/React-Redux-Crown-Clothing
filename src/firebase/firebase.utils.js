import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoDKaJwm-xU2JyByMa3CYlyUa0312YzX4",
  authDomain: "crown-db-9a312.firebaseapp.com",
  projectId: "crown-db-9a312",
  storageBucket: "crown-db-9a312.appspot.com",
  messagingSenderId: "1035767897433",
  appId: "1:1035767897433:web:e90c2505f8d265581cc048",
  measurementId: "G-B9DCHD0DER",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const CreatedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        CreatedAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
