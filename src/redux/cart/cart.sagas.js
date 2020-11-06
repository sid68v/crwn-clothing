import { all, call, put, takeLatest } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartOnLogoutSuccess() {
  yield put(clearCart());
}

function* clearCartOnLogoutSuccessSaga() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnLogoutSuccess);
}

export function* cartSagas() {
  yield all([call(clearCartOnLogoutSuccessSaga)]);
}
