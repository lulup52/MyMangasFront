import Axios from 'axios';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import tempDatas from "../temporaryDB/dbTest.json"
import {
  Link,
} from 'react-router-dom';
import './style/collectionListe.css';

import ModaleLecture from './ModaleCollection'
import ButtonPerso from './designComponent/Button';
import ModaleCollectionAdd from './collectionAdd'
import BlockTome from './structureComponents/BlockSerie';

export default function Lecture({userId}) {
// préparer l'axios pour ne récupérer que les séries présentes dans la lecture de l'utilisateur
  // recevoir les info de la bdd test -> const lectureListe = tempDatas.liste_serie_lecture
    const [allUserLecture, setAllUserLecture] = useState([]);
    const [modaleDataOn, setModaleDataOn] = useState(false);  
    const [modaleAddOn, setModaleAddOn] = useState(false);  
    const [modaleData, setModaleData] = useState({});  

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/lecture/series_lecture/${userId}`)
      .then((res) => {setAllUserLecture(res.data)})
      },[userId])

     const manageModaleData = (lecture) => {
      setModaleDataOn(!modaleDataOn)
      setModaleData(lecture)
    }

    const manageModaleAdd = () => {
      setModaleAddOn(!modaleAddOn)
    }

    return (
    <>
      <p className='userIdTest'>{userId}</p>
      <div className="pageContainer">
        <div className='titreButton'>
          <h2 className='titrePage'>Your lecture</h2>
          {/* <ButtonPerso adress={'function'} content={"+"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={manageModaleAdd} /> */}
        </div>
        <div className='mangaLectureContainer'>
        {
          allUserLecture.map(lecture => 
            <BlockTome serie={lecture} modalFunction={manageModaleData} />
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
          <ModaleLecture parentComponent={'lecture'} modaleData={modaleData} userId={userId} manageModaleData={manageModaleData}/>
        </div>
        : ""
      }
      {
        modaleAddOn ? 
        <div className='modaleContainer' >
          <ModaleCollectionAdd parentFunction={manageModaleAdd} allUserLecture={allUserLecture} userId={userId}/>
        </div>
        : ""
      }
      
    </>
  );
}