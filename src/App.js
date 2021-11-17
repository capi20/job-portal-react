import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import './App.css';

import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ShortListScreen from './screens/ShortListScreen/ShortListScreen';
import RejectScreen from './screens/RejectScreen/RejectScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/shortlisted" exact component={ShortListScreen}/>
          <Route path="/rejected" exact component={RejectScreen}/>
          <Route path="/" exact component={HomeScreen}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
