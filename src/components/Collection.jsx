import Axios from 'axios';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import './style/collectionListe.css';
import './style/sass/basicsElements.css';


import ModaleCollection from './ModaleCollection'
import ButtonPerso from './designComponent/Button';

import BlockSerie from './structureComponents/BlockSerie';
import ModaleCollectionAdd from './collectionAdd'

export default function Collection({userId}) {
// préparer l'axios pour ne récupérer que les séries présentes dans la colection de l'utilisateur
    const [allUserCollection, setAllUserCollection] = useState([]);
    const [modaleDataOn, setModaleDataOn] = useState(false);  
    const [modaleAddOn, setModaleAddOn] = useState(false);  
    const [modaleData, setModaleData] = useState({});  

    useEffect(() => {
      importDatas()
      },[userId])

    const resetId = (id) => {
      userId = id
    }

    const importDatas = () => {

    
      Axios.get(`http://localhost:8000/api/collection/serie_collection/${userId}`)

      .then((response) => {setAllUserCollection(response.data) })
    }
    
     const manageModaleData = (serie) => {
       setModaleDataOn(!modaleDataOn)
       setModaleData(serie)
       importDatas()
    }
    
    const manageModaleAdd = (fromComponent) => {
      importDatas()
      if (fromComponent=== "modalCollection") {

      } else {
        setModaleAddOn(!modaleAddOn)
      }

    }

    return (
    <>
      <p className='userIdTest'>{userId}</p>
      <div className="pageContainer">
        <div className='titreButton'>
          <h2 className='titrePage'>Your collection</h2>
          <ButtonPerso adress={'function'} content={"+"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={manageModaleAdd} />
        </div>
        <div className='mangaCollectionContainer'>
      
        {
          allUserCollection.length === 0 ? 
          <div className="noSeriesMessage">
            <p>aucune série n'est enregistrée</p>
          </div>
          :
        allUserCollection.map(serie => 
            <BlockSerie key={`keyFor${serie.serie_title}`} serie={serie} modalFunction={manageModaleData} />
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
          <ModaleCollection parentComponent={"collection"} modaleData={modaleData} userId={userId} parentFunction={manageModaleData}/>
        </div>
        : ""
      }
      {
        modaleAddOn ? 
        <div className='modaleContainer' >
          <ModaleCollectionAdd parentFunction={manageModaleAdd} allUserCollection={allUserCollection} userId={userId}/>
        </div>
        : ""
      }
      
    </>
  );
}