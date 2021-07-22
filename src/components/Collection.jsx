import Axios from 'axios';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import tempDatas from "../temporaryDB/dbTest.json"
import {
  Link,
} from 'react-router-dom';
import './style/collectionListe.css';
import ModaleCollection from './ModaleCollection'


export default function Collection() {
// préparer l'axios pour ne récupérer que les séries présentes dans la colection de l'utilisateur
  // recevoir les info de la bdd test -> const colectionListe = tempDatas.liste_serie_colection
    const [userId, setUserId] = useState(1);
    const [allUserCollections, setAllUserCollections] = useState([]);

    const [modaleDataOn, setModaleDataOn] = useState(false);  
    const [modaleData, setModaleData] = useState({});  

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/collections/serie_collection/${userId}`)
      
          .then((response) => {setAllUserCollections(response.data) })
      },[userId])

     const manageModaleData = (colection) => {
      setModaleDataOn(!modaleDataOn)
      setModaleData(colection)

    }
    return (
    <>
    <select className='selectTest' onChange={(e)=> setUserId(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
      <div className="pageContainer">
        <div className='titreButton'>
          <h2 className='titrePage'>Your collection</h2>
         
        </div>
        <div className='mangaCollectionContainer'>
        {
          allUserCollections.map(colection => 
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
          {    console.log(modaleData)
}
        </div>
        : ""
      }
      
    </>
  );
}