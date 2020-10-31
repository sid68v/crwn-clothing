import { ShopActionTypes } from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotTomap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collections) => {
  console.log("success", collections);
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = (message) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message,
  };
};

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collections = convertCollectionsSnapshotTomap(snapshot);
        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
