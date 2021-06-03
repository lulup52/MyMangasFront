import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import './style/movieliste.css';


export default function MoviesPlaylists() {
  const [moviesPlaylist, setMoviesPlaylist] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/playlists`)
  
      .then((res) => {
        setMoviesPlaylist(res.data)
        console.log(res.data)
      });    
    }, [])


 

    
    

    return (
    <div className="moviesPlayliste">
      <div className='exitButton'>
        <Link className="exitButton" to="/">X</Link>
      </div>
    
      <div className="titlePage">
        <div>Your playlists</div>
      </div>
      <div className="playlisteListe">
      {
          moviesPlaylist.length !== 0 ? 
          moviesPlaylist.map(playliste => 
            <div className="blockPlayliste">
              <div>{playliste.name}</div>
              <div>{playliste.genre}</div>
            </div>
          )
          :
          ""
        }
        <div className="blockPlayliste">
          <button className='addButton' onClick={() => setModalOpen(!modalOpen) }>
              +
          </button>
        </div>
      </div>
      {
        modalOpen? 
        <div className='modalAddPlaylist'>
          <div>input 1</div>
          <div>input 2</div>
        </div>
        :
        "" 
      }
      
    </div>
  );
}



