import Axios from 'axios';
import datasImport from '../temporaryDB/dbTest.json';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import './style/basicsElements.css';
import './style/fullListe.css';

import {
  Link,
} from 'react-router-dom';

import AjoutFilm from './AjoutFilm'
import ModaleSerie from './ModaleSerie'
import ModaleAddSerie from './ModaleAddSerie'
import Button from './designComponent/Button';



export default function FullListe() {
  const [modaleDataOn, setModaleDataOn] = useState(false);  
  const [modaleAddOn, setModaleAddOn] = useState(false);  

    const [datas, setDatas] = useState(datasImport);  
    const [modaleData, setModaleData] = useState({});  
    // const [moviesList, setMoviesList] = useState([]);
    // const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    // //const [movieForm, setMovieForm] = useState({title:'', director: '', year:'', color: '', duration:'' });

    // const [filterMovies, setFilterMovie] = useState({title:'', director: '', year:''});


    // useEffect(() => {
    //   Axios.get(`http://localhost:8000/api/movies`)
  
    //   .then((res) => {
    //     setMoviesList(res.data)
    //     console.log(res.data)

    //   });
    // }, []);

    // const updateFilter = (e) => {
    //   switch (e.target.id) {
    //     case 'title':
    //       setFilterMovie({...filterMovies, title : e.target.value })
    //     break;
    //     case 'director':
    //       setFilterMovie({...filterMovies, director : e.target.value })
    //     break;
    //     case 'year':
    //       setFilterMovie({...filterMovies, year : e.target.value })
    //     break;
    //     default:
    //      console.log('no filter selected')
    //   }      
    // }

    // const activeFilter = () => {
    //   setFilteredMoviesList(moviesList.filter(movie => movie.title.toLowerCase().includes(`${filterMovies.title.toLowerCase()}`)).
    //   filter(movie => movie.director.toLowerCase().includes(`${filterMovies.director.toLowerCase()}`)).
    //   filter(movie => movie.year.includes(`${filterMovies.year}`))
    //    )
    // }

    const manageModaleData = (manga) => {
      setModaleDataOn(!modaleDataOn)
      setModaleData(manga)

    }
    
    const manageModaleAdd = () => {
      setModaleAddOn(!modaleAddOn)

    }
    return (
    <>
      <div className="pageContainer">
        <div className='titreButton'>
          <h2 className='titrePage'>Liste</h2>
          {/* <div className='addButton buttonListe' onClick={() => manageModaleAdd()}><p>+</p></div> */}
          <Button adress={'function'} content={"+"} defaultClasse={"addButton "} classeClicked={"addButtonClicked"} onclickFunction={manageModaleAdd}/>
        </div>
        <div className='mangaListeContainer'>
          {datas.fullListe.map(e => console.log(e))}
          {
            datas.fullListe.map(manga => 
              <div className='blockManga' onClick={e => manageModaleData(manga)}>
                <div className='titleBLockMangas'>{manga.title}</div>
                <div>{manga.nbTomes}</div>
                <div className='imgContainer'>
                  <img src={manga.ilustration} />
                </div>
              </div>
            )
          }
          <div className='blockManga' onClick={() => manageModaleAdd()}><p>+</p></div>

        </div>
      </div>
      <div className='navBarContainer' >
        <NavBar />
      </div>
      
      {
        modaleDataOn ? 
        <div className='modaleContainer' onClick={e => manageModaleData()}>
          <ModaleSerie modaleData={modaleData}/>
        </div>
        : ""
      }
      {
        modaleAddOn ? 
        <div className='modaleAddSerieContainer'>
          <ModaleAddSerie manageModaleAdd={manageModaleAdd} />
        </div>
        : ""
      }
      
    </>
  );
}

