import Axios from 'axios';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import tempDatas from "../temporaryDB/dbTest.json"
import {
  Link,
} from 'react-router-dom';
import './style/collectionListe.css';

import ModaleCollection from './ModaleCollection'
import ButtonPerso from './designComponent/Button';
import ModaleCollectionAdd from './collectionAdd'

export default function Collection({userId}) {
// préparer l'axios pour ne récupérer que les séries présentes dans la colection de l'utilisateur
  // recevoir les info de la bdd test -> const colectionListe = tempDatas.liste_serie_colection
    const [allUserCollection, setAllUserCollection] = useState([]);
    const [modaleDataOn, setModaleDataOn] = useState(false);  
    const [modaleAddOn, setModaleAddOn] = useState(false);  
    const [modaleData, setModaleData] = useState({});  

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/collection/serie_collection/${userId}`)
      
          .then((response) => {setAllUserCollection(response.data) })
      },[userId])

     const manageModaleData = (colection) => {
      setModaleDataOn(!modaleDataOn)
      setModaleData(colection)
    }

    const manageModaleAdd = () => {
      setModaleAddOn(!modaleAddOn)
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
          allUserCollection.map(colection => 
            <div className='blockManga' onClick={e => manageModaleData(colection)}>

              <div className='titleBLockMangas'>{colection.serie_title}</div>
              <div className='imgContainer'>
                <img src={colection.ilustration} />
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
          <ModaleCollection modaleData={modaleData} userId={userId} manageModaleData={manageModaleData}/>
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