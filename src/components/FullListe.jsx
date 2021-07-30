import Axios from 'axios';
// import datasImport from '../temporaryDB/dbTest.json';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import './style/basicsElements.css';
import './style/fullListe.css';

import {
  Link,
} from 'react-router-dom';

import collectionAdd from './collectionAdd'
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
            <h2 className='titrePage'>All series </h2>
           
          </div>
          <div className='mangaCollectionContainer'>
          {
            allSeries.map(serie => 
              <div className='blockManga' onClick={e => manageModaleData(serie)}>
  
                <div className='titleBLockMangas'>{serie.title}</div>
                <div className='imgContainer'>
                  <img src={serie.ilustration} />
                </div>
  
              </div>
              )
            }
          </div>
        </div>
        <div className='navBarContainer' >
          <NavBar />
        </div>
        
        {
          modaleDataOn ? 
          <div className='modaleContainer' >
            <ModaleSerie modaleData={modaleData} manageModaleData={manageModaleData}/>
            {    console.log(modaleData)
  }
          </div>
          : ""
        }
        
      </>
  );
}

