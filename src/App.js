import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';

import Playliste from './components/MoviesPlayliste'
import FullListe from './components/FullListe'
import MoviesList from './components/MoviesList'
import Home from './components/Home'

function App() {

  
 


  return (
    <div>
      <Router>
        <Route path="/full_liste">
          <FullListe />
        </Route>
        <Route path="/playliste">
          <Playliste />
        </Route>
        <Route path="/movies">
          <MoviesList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
