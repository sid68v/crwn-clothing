import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import LoginPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends Component {
  unsubscribeFromAuthStateChange = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuthStateChange = auth.onAuthStateChanged(
      async userAuthFromFirebase => {
        if (userAuthFromFirebase) {
          const userDocRef = await createUserProfileDocument(
            userAuthFromFirebase
          );

          userDocRef.onSnapshot(snapshot => {
            console.log(snapshot.data());
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        } else setCurrentUser(userAuthFromFirebase);
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
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(null, mapDispatchToProps)(App);
