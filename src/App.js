import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'

const TestPage=()=><div>Test Page</div>

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
