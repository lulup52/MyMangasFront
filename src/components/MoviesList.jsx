import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style/basicsElements.css';
import './style/collectionListe.css';
import {
  Link,
} from 'react-router-dom';

import CollectionAdd from './collectionAdd'
export default function MoviesList() {
    const [formOpen, setFormOpen] = useState(false);  
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    //const [movieForm, setMovieForm] = useState({title:'', director: '', year:'', color: '', duration:'' });

    const [filterMovies, setFilterMovie] = useState({title:'', director: '', year:''});


    useEffect(() => {
      Axios.get(`http://localhost:8000/api/movies`)
  
      .then((res) => {
        setMoviesList(res.data)
        console.log(res.data)

      });
    }, []);

    const updateFilter = (e) => {
      switch (e.target.id) {
        case 'title':
          setFilterMovie({...filterMovies, title : e.target.value })
        break;
        case 'director':
          setFilterMovie({...filterMovies, director : e.target.value })
        break;
        case 'year':
          setFilterMovie({...filterMovies, year : e.target.value })
        break;
        default:
         console.log('no filter selected')
      }      
    }

    const activeFilter = () => {
      setFilteredMoviesList(moviesList.filter(movie => movie.title.toLowerCase().includes(`${filterMovies.title.toLowerCase()}`)).
      filter(movie => movie.director.toLowerCase().includes(`${filterMovies.director.toLowerCase()}`)).
      filter(movie => movie.year.includes(`${filterMovies.year}`))
       )
    }

    return (
    <div className='movvieListePage'>
      <div className='exitButton'>
        <Link className="exitButton" to="/"><p>+</p></Link>
      </div>
      
      <button onClick={()=> setFormOpen(!formOpen)}>click here</button>
      {formOpen ? <div className='modale'><CollectionAdd /></div> : ""}

      <div className="titlePage">
        Movie Liste
      </div>

      <div className='seachSection'>
        <div className='searchBar'>
          <input id='title' placeholder='title' onChange={(e) =>updateFilter(e)} value={filterMovies.title}></input>
          <input id='director' placeholder='director' onChange={(e) =>updateFilter(e)} value={filterMovies.director}></input>
          <input id='year' placeholder='year' onChange={(e) =>updateFilter(e)} value={filterMovies.year}></input>
         
        </div>
        <div className='searchButton'>
          <button onClick={activeFilter}>chercher</button>
        </div>
      </div>

      <div className='mangaListeContainer'>
        {moviesList.length !== 0 && filteredMoviesList.length === 0 ? 
            moviesList.map(movie => 
              <div className='blockManga'>
                <div>{movie.title}</div><div>{movie.director}</div><div>{movie.year}</div><div>{movie.color}</div><div>{movie.duration}</div><br/>
              </div>)
            :
            filteredMoviesList.length !== 0 ?filteredMoviesList.map(movie => 
              <div className='blockMovie'>
                <div>{movie.title}</div><div>{movie.director}</div><div>{movie.year}</div><div>{movie.color}</div><div>{movie.duration}</div><br/>
              </div>) : 
              "" }
      </div>

      <div className='arowSection'>

      </div>
      
    </div>
  );
}
