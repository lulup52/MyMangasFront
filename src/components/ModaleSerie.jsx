import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ButtonPerso from './designComponent/Button';

import {

    Link,
  } from 'react-router-dom';

import './style/modaleSeries.css';

export default function ModaleSerie({modaleData, manageModaleData}) {
   
    const [allTomesInSerie, setAllTomesInSerie] = useState([])

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

    return (
    <div className='modale' >
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={manageModaleData} />

      <div className='modaleTitle'>{modaleData.title}</div>
      <div className='modaleImage'>
        <img src={modaleData.ilustration} />
      </div>
      <div className='modaleAuthor'>{modaleData.author}</div>
      <div className='modaleSerieDescribe'>
        <p>{modaleData.sumary}</p>
      </div>

      <div className='tomeCollectionListe'>
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



