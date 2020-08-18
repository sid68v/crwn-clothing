import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import LoginPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectorCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { findAllByTitle } from "@testing-library/react";

class App extends Component {
  unsubscribeFromAuthStateChange = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuthStateChange = auth.onAuthStateChanged(
      async (userAuthFromFirebase) => {
        if (userAuthFromFirebase) {
          const userDocRef = await createUserProfileDocument(
            userAuthFromFirebase
          );

          userDocRef.onSnapshot((snapshot) => {
            console.log(snapshot.data());
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            });
          });
        } else setCurrentUser(userAuthFromFirebase);

        // adding the data to firestore programmatically.
        // addCollectionAndDocuments(
        //   "collections",
        //   collectionsArray.map((item) => {
        //     return {
        //       title: item.title,
        //       items: item.items,
        //     };
        //   })
        // );
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuthStateChange();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectorCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
