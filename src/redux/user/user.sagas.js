import { takeLatest, put, call, all } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

import {
  auth,
  createUserProfileDocument,
  googleSignInProvider,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const userData = yield auth.signInWithPopup(googleSignInProvider);

    // if the user signs in successfully, create a firbase document.
    yield getSnapshotFromUserAuth(userData.user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail(action) {
  const {
    payload: { email, password },
  } = action;

  try {
    const userData = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(userData.user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* checkUserLoggedInStatus() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onUserSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* startUserSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

function* checkIfUserIsLoggedInSaga() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserLoggedInStatus);
}

function* onGoogleSignInStartSaga() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* onEmailSignInStartSaga() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

function* onUserSignOutSaga() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, onUserSignOut);
}

function* onUserSignUpStartSaga() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, startUserSignUp);
}

function* signInAfterSignUpSaga() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(checkIfUserIsLoggedInSaga),
    call(onUserSignOutSaga),
    call(onUserSignUpStartSaga),
    call(signInAfterSignUpSaga),
  ]);
}
