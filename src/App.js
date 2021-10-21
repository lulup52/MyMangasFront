import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import Collection from './components/Collection'
import FullListe from './components/FullListe'
import Lecture from './components/Lecture'
import Home from './components/Home'

function App() {

  const [userId, setUserId] = useState("1");
  const [logtoken, setLogtoken] = useState("11111")
  
  
  const changeUserId = (id) => {
    setUserId(id)
  }
  const withAuth = (Component) => {
    console.log(logtoken)
    if(logtoken != '') {
      return Component
    } else {
      console.log('no token')
    }
  };


  return (

  
    <div>
      <Router>

        <Route path="/full_liste">
          <FullListe userId={userId}/>
        </Route>

         <Route path="/collection">
          {logtoken != "" ? <Collection userId={userId}/> : console.log("bubu") }
        </Route> 

        <Route path="/lecture">
          <Lecture userId={userId} />
        </Route>
        <Route exact path="/">
          <Home changeUserId={changeUserId}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
