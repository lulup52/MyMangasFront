import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ButtonPerso from './designComponent/Button';

import './style/modaleSeries.css';

export default function ModaleCollection({modaleData, userId, manageModaleData, parentComponent}) {
   
  const showDetails = (e, i) => {
    let detailsTome = document.querySelector(`#detailsTome${i}`)
    if ( detailsTome.style.display !== "flex") {
 
      detailsTome.style.display = "flex"
    } else {
      detailsTome.style.display = "none"

    }
  }
  const [userTomesInCollection, setUserTomesInCollection] = useState([])

  /*---les données des lectures et des collections étant destinées a être affichées avec le même visuel tout en fournissant 
  les mêmes info, le composant ModaleCollection sera utilisé dans les 2 cas. On vérifiera d'ou ce composant a été appelé via la variable
   parentComponent. On switch ainsi de requête au besoin------*/
 
  useEffect(() => {
    if(parentComponent === "lecture") {
        /*---est appelé si le composant parent est Lecture------*/
        Axios.get(`http://localhost:8000/api/lecture/tomes_in_serie/${userId}/${modaleData.serieId}`)
        
        .then((response) => {setUserTomesInCollection(response.data) })
        
    } else if(parentComponent === "collection") {
        /*---est appelé si le composant parent est collection------*/

      Axios.get(`http://localhost:8000/api/collection/alltomes_collection/${userId}/${modaleData.serieId}`)
        /*---On charge ici la liste de tous les tomes présents soit dans la collection choisie par l'utilisateur, soit dans la lecture------*/

          .then((response) => {setUserTomesInCollection(response.data) })
    }
    },[])

    return (
    <div className='modale'>
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={manageModaleData} />
       

      <div className='modaleTitleCollection'>{modaleData.serie_title}</div>
      <div className='modaleImageCollection'>
        <img src={modaleData.ilustration} />
      </div>
      <div className=''>{modaleData.author}</div>

      <div className='tomeCollectionListe'>
        {
          userTomesInCollection.map((e, i) => 
            <div key={`keyTome${i}`} className="tomeDetailsContainer"  onClick={(e) => showDetails(e, i)}>
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



