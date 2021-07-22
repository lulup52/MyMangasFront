import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ButtonPerso from './designComponent/Button';

import './style/modaleSeries.css';

export default function ModaleCollection({modaleData, userId, manageModaleData}) {
   
  const showDetails = (e, i) => {
    if ( document.querySelector(`#detailsTome${i}`).style.display !== "flex") {
      document.querySelector(`#detailsTome${i}`).style.display = "flex"
    } else {
      document.querySelector(`#detailsTome${i}`).style.display = "none"

    }
  }
  

  const [userTomesInCollection, setUserTomesInCollection] = useState([])
    useEffect(() => {
    Axios.get(`http://localhost:8000/api/collections/tome_collection/${userId}/${modaleData.serieId}`)
    
        .then((response) => {setUserTomesInCollection(response.data) })
    },[])
    return (
    <div className='modale'>
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={manageModaleData} />
       {/* <div className='exitButtonModale'>
        <p>+</p>
      </div> */}
      <div className='modaleTitleCollection'>{modaleData.serie_title}</div>
      <div className='modaleImageCollection'>
        <img src={modaleData.ilustration} />
      </div>
      <div className=''>{modaleData.author}</div>

      <div className='tomeCollectionListe'>
        {
          userTomesInCollection.map((e, i) => 
            <div className="tomeDetailsContainer"  onClick={(e) => showDetails(e, i)}>
              <div className="blockTomeCollection" >
                <p>{e.subtitle}</p>
                <p>{e.num_tome}</p>
              </div>
              <div className="blockTomeDetails" id={`detailsTome${i}`}>
                <p>{e.tome_sumary}</p>
                <p>{e.author}</p>
              </div>
            </div>
            )
        }
      </div>
    </div>
  );
}



