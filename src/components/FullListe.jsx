import Axios from 'axios';
// import datasImport from '../temporaryDB/dbTest.json';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import './style/basicsElements.css';
import './style/fullListe.css';

import {
  Link,
} from 'react-router-dom';

import AjoutFilm from './AjoutFilm'
import ModaleSerie from './ModaleSerie'
// import ModaleAddSerie from './ModaleAddSerie'
import Button from './designComponent/Button';



export default function FullListe() {

  const [allSeries, setAllSeries] = useState([]);  

  useEffect(() => {
  Axios.get(`http://localhost:8000/api/series`)
      .then((response) => {setAllSeries(response.data) })
  },[])
  const [modaleDataOn, setModaleDataOn] = useState(false);  
  const [modaleAddOn, setModaleAddOn] = useState(false);  

  const [modaleData, setModaleData] = useState({});  
  console.log(allSeries)

    const manageModaleData = (manga) => {
      setModaleDataOn(!modaleDataOn)
      setModaleData(manga)

    }
    // fonction d'ajout d'une nouvelle série
    // const manageModaleAdd = () => {
    //   setModaleAddOn(!modaleAddOn)

    // }
    return (
    <>
      <div className="pageContainer">
        <div className='titreButton'>
          <h2 className='titrePage'>Liste</h2>
          {/*
          --------------bouton d'ajout d'une série
          <Button adress={'function'} content={"+"} defaultClasse={"addButton "} classeClicked={"addButtonClicked"} onclickFunction={manageModaleAdd}/> 
          */}
        </div>
        <div className='mangaListeContainer'>
          {allSeries.map(e => console.log(e))}
          {
            allSeries.map(manga => 
              <div className='blockManga' onClick={e => manageModaleData(manga)}>
                <div className='titleBLockMangas'>{manga.title}</div>
                <div>{manga.nbr_of_tome}</div>
                <div className='imgContainer'>
                  <img src={manga.ilustration} />
                </div>
              </div>
            )
          }
          {/*-------------bouton d'ajout
           <div className='blockManga' onClick={() => manageModaleAdd()}><p>+</p></div> */}

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
        // modaleAddOn ? 
        // <div className='modaleAddSerieContainer'>
        //   <ModaleAddSerie manageModaleAdd={manageModaleAdd} />
        // </div>
        // : ""
      }
      
    </>
  );
}

