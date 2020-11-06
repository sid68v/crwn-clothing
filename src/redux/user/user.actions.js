import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGNIN_START,
  };
};

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGNIN_SUCCESS,
    payload: user,
  };
};
export const signInFailure = (error) => {
  return {
    type: UserActionTypes.SIGNIN_FAILURE,
    payload: error,
  };
};

export const emailSignInStart = (loginInformation) => {
  return {
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: loginInformation,
  };
};

export const checkUserSession = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const signUpStart = (signUpInfo) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: signUpInfo,
  };
};
export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};
export const signUpFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: error,
  };
};
