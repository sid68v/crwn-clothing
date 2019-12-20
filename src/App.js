import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shoppage/shoppage.component'
import Header from './components/header/header.component'
import LoginPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth,firestore} from './firebase/firebase.utils'


class App extends Component {

  constructor(){
    super();
    this.state={
      user:null,
      username:''
    }
  }

  unsubscribeFromAuthStateChange=null;

 componentDidMount() {
   this.unsubscribeFromAuthStateChange= auth.onAuthStateChanged(userFromFirebase => {
     this.setState({
      user:userFromFirebase
     })
   console.log(this.state.user);
   });
 }


 componentWillUnmount(){
this.unsubscribeFromAuthStateChange();
 }


  render(){

    return (
      <div>
        <Header isSignedIn={this.state.user}/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
        <Route  path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
