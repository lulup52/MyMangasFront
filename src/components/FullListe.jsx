import Axios from 'axios';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import './style/basicsElements.css';
import './style/fullListe.css';


import ModaleSerie from './ModaleSerie'



export default function FullListe({userId}) {

  const [allSeries, setAllSeries] = useState([]);  

  useEffect(() => {
  Axios.get(`http://localhost:8000/api/series`)
      .then((response) => {setAllSeries(response.data) })
  },[])
  
  const [modaleDataOn, setModaleDataOn] = useState(false);  

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
        <p className='userIdTest'>{userId}</p>
        <div className="pageContainer">
          <div className='titreButton'>
            <h2 className='titrePage'>All series </h2>
           
          </div>
          <div className='mangaCollectionContainer'>
          {
            allSeries.map(serie => 
              <div className='blockManga' onClick={e => manageModaleData(serie)}>
  
                <div className='titleBLockMangas'>{serie.serie_title}</div>
                <div className='imgContainer'>
                  <img src={serie.ilustration} alt={`here is a simple ilustration of the manga ${serie.serie_title}`}/>
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
            <ModaleSerie modaleData={modaleData} userId={userId} manageModaleData={manageModaleData}/>
            {    console.log(modaleData)
  }
          </div>
          : ""
        }
        
      </>
  );
}

