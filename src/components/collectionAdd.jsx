import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ButtonPerso from './designComponent/Button';
import BlockManga from './structureComponents/BlockSerie'
import ListeTomes from './structureComponents/ListeTomes'
import './style/collectionListe.css';


export default function CollectionAdd({parentFunction, userId}) {
  
    const [seriesNotInCOllection, setSeriesNotInCOllection] = useState([]);  

    useEffect(() => {
    Axios.get(`http://localhost:8000/api/collection/serie_notin_collection/${userId}`)
        .then((response) => {setSeriesNotInCOllection(response.data) })
      
        
    },[userId])
    

    return (
    <div className='modaleAddCollection'>
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={parentFunction} />

        <div>Ajout d'une nouvelle collection</div>
            <div className="">
                <label htmlFor="titre">titre</label><br/>
                <input className="" type="text" name="title" placeholder="chose a serie to add"/>
            </div>
            
          <div className='addSerieColelction'>
          {
            seriesNotInCOllection.map(serie => 
              <div key={`keySerie${serie.id}`} className="blocAndAddButton">
                
                <BlockManga serie={serie} modalFunction={""}/>
                <ListeTomes parentComponent={"modalAddCollection"} parentFunction={parentFunction} userId={userId} serieId={serie.id}/>
                
              </div>
               
              )
            }
          </div>
    </div>
  );
}



