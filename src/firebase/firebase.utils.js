import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBy9UEmAthXuesRudFXLxJwk5yIV99DRyY",
  authDomain: "crwn-db-3a228.firebaseapp.com",
  databaseURL: "https://crwn-db-3a228.firebaseio.com",
  projectId: "crwn-db-3a228",
  storageBucket: "crwn-db-3a228.appspot.com",
  messagingSenderId: "241753113888",
  appId: "1:241753113888:web:370f7717e77acb91a90345",
  measurementId: "G-6XJG0Q6TYZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Enable google sign in

const googleSignInProvider = new firebase.auth.GoogleAuthProvider();
googleSignInProvider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = () =>
  auth.signInWithPopup(googleSignInProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  let userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error saving to firebase :", error.message);
    }
  }
  return userRef;
};

export default firebase;
