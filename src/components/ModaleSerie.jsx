import React, { useState, useEffect } from 'react';

import Axios from 'axios';
import ButtonPerso from './designComponent/Button';

import {

    Link,
  } from 'react-router-dom';

import './style/basicsElements.css';
import './style/modaleSeries.css';

export default function ModaleSerie({modaleData, manageModaleData, userId}) {

  const [allTomesInSerie, setAllTomesInSerie] = useState([])
    const [tomesInColection, setTomesInColection] = useState([])

    const showDetails = (e, i) => {
      let detailsTome = document.querySelector(`#detailsTome${i}`)
      if ( detailsTome.style.display !== "flex") {
   
        detailsTome.style.display = "flex"
      } else {
        detailsTome.style.display = "none"
  
      }
    }

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/series/alltomes_serie/${modaleData.id}`)
       .then((response) => {setAllTomesInSerie(response.data) })
      },[])

    useEffect(() => {
      Axios.get(`http://localhost:8000/api/collection/tome_collection/${userId}`)
        .then((response) => {setTomesInColection(response.data) })
        
      },[userId])
/*--------------------se servire de cette fonction pour géré l'affichage du bouton d'ajout dans la collection--------------------*/ 
      const test = () => {

        allTomesInSerie.map(e => tomesInColection.map(tome => e.tomeID === tome.tome_id ? console.log(tome.tome_id) :console.log('none') ))
      }

    return (
    <div className='modale' >
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={manageModaleData} />
      <p className='userIdTest'>{userId}</p>
      <div className='modaleTitle'>{modaleData.title}</div>
      <button onClick={() => test()}>YO</button>

      <div className='modaleImage'>
        <img src={modaleData.ilustration} />
      </div>
      <div className='modaleAuthor'>{modaleData.author}</div>
      <div className='modaleSerieDescribe'>
        <p>{modaleData.sumary}</p>
      </div>

      <div className='tomeSerieListe'>
        {
          allTomesInSerie.map((e, i) => 
            <div className="tomeDetailsContainer"  onClick={(e) => showDetails(e, i)}>
              <div className="blockTomeCollection" >
                <p>{e.subtitle}</p>
                <p>{e.num_tome}</p>
              
              </div>
              <div className="blockTomeDetails" id={`detailsTome${i}`}>
                <p>{e.tome_sumary}</p>
              </div>
            </div>
            )
        }
      </div>

    </div>
  );
}



