import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ButtonPerso from './designComponent/Button';
import ListeTomes from './structureComponents/ListeTomes';
import MultyDotsButton from './designComponent/MultyDotsButton';

import './style/modaleSeries.css';
import './style/sass/basicsElements.css';

export default function ModaleCollection({modaleData, userId, parentFunction, parentComponent}) {
   
  const [userTomesInCollection, setUserTomesInCollection] = useState([])
  
  /*---les données des lectures et des collections étant destinées a être affichées avec le même visuel tout en fournissant 
  les mêmes info, le composant ModaleCollection sera utilisé dans les 2 cas. On vérifiera d'ou ce composant a été appelé via la variable
  parentComponent. On switch ainsi de requête au besoin------*/
  
  useEffect(() => {
    buildListe()
  },[])
  
  const buildListe = () => {

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
  }
      
    const showDetails = (i) => {
      let detailsTome = document.querySelector(`#detailsTome${i}`)
      let allDetailsDomes = document.querySelectorAll(`.detailsTome`)
      allDetailsDomes.forEach(element => {
        element.style.display = "none"
      });

      if ( detailsTome.style.display !== "none") {
  
        detailsTome.style.display = "none"
      } else {
        detailsTome.style.display = "flex"

      }   
    }
     
    const deleteTome = (tomeId) => {
      if(userTomesInCollection.length === 1) {
        Axios.delete(`http://localhost:8000/api/collection/delete/${userId}/${tomeId}`)
        .then((response) => parentFunction())
      } else {
        Axios.delete(`http://localhost:8000/api/collection/delete/${userId}/${tomeId}`)
        .then((response) => buildListe())
        
      }
    }

    return (
      <div className="container">
        <div className="buttonExitAdd">
          <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={parentFunction} />
        </div>
        <div className='modale'>
          
          <div className='detailsAndAddContainer'>

            <div className='detaileContainer'>

              <p className='modaleTitleCollection'>{modaleData.serie_title}</p>

              <div className='imageAndText'>
                <div className='modaleImageCollection'>
                  <img src={modaleData.ilustration} />
                </div>

                <div className='modaleTextCollection'>
                  <div className='modaleSumary'>{modaleData.sumary}</div>
                  <p className='modaleAuthor'>{modaleData.author}</p>
                </div>
              </div>

            </div>
            <div className='addContianer'>
              <ListeTomes userId={userId} serieId={modaleData.serieId} parentFunction={buildListe} parentComponent={"modalCollection"}/>
            </div>
          </div>

          

          <div className='tomeCollectionListe'>
            {
              userTomesInCollection.map((tome, i) => 
                <div key={`keyTome${i}`} className="tomeDetailsButtonContainer" >
                  <div className="tomeDetailsContainer">
                    <div className="blockTomeCollection" >
                      <p>{tome.subtitle}</p>
                      <p>{tome.num_tome}</p>

                      {/* <button  onClick={() => showDetails(tome, i)}>details</button>
                      <button onClick={() => deleteTome(tome.tomeId)} >delete</button> */}
                    </div>
                    <div className="detailsTome blockTomeDetails" id={`detailsTome${i}`}>
                      <p>{tome.tome_sumary}</p>
                    </div>
                  </div>
                  <MultyDotsButton buttons={["details", "trash"]} functions={{showDetails : showDetails, deleteTome : deleteTome}} idButton={i} tomeId={tome.tomeId}/>
                </div>
                )
            }
          </div>
        </div>
      </div>
    );
  }



