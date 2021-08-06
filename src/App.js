import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import Collection from './components/Collection'
import FullListe from './components/FullListe'
import MoviesList from './components/MoviesList'
import Home from './components/Home'

function App() {

  const [userId, setUserId] = useState("1");
    
  
  const changeUserId = (id) => {
    setUserId(id)
  }


  return (

  
    <div>
      <Router>
        <Route path="/full_liste">
          <FullListe userId={userId}/>
        </Route>
        <Route path="/collection">
          <Collection userId={userId} />
        </Route>
        <Route path="/movies">
          <MoviesList userId={userId} />
        </Route>
        <Route exact path="/">
          <Home changeUserId={changeUserId}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
