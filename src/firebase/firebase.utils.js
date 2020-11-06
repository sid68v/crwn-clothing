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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// Enable google sign in

export const googleSignInProvider = new firebase.auth.GoogleAuthProvider();
googleSignInProvider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = () =>
  auth.signInWithPopup(googleSignInProvider);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((item) => {
    const docRef = collectionRef.doc(item.title);
    batch.set(docRef, item);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotTomap = (collections) => {
  const mappedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      title,
      items,
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
    };
  });

  return mappedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

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
