import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ButtonPerso from './designComponent/Button';
import BlockManga from './BlockManga'
import './style/collectionListe.css';


export default function CollectionAdd({parentFunction, allUserCollection, userId}) {
  
    const [seriesNotInCOllection, setSeriesNotInCOllection] = useState([]);  

    useEffect(() => {
    Axios.get(`http://localhost:8000/api/collection/serie_notin_collection/${userId}`)
        .then((response) => {setSeriesNotInCOllection(response.data) })
      
        
    },[])

 


    return (
    <div className='modaleAddCollection'>
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={parentFunction} />

        <div>Ajout d'une nouvelle collection</div>
        <form >
            <div className="">
                <label htmlFor="titre">titre</label><br/>
                <input className="" type="text" name="title" placeholder="chose a série to add"/>
            </div>
            
          <div className='addSerieColelction'>
          {
            seriesNotInCOllection.map(serie => 
              <BlockManga serie={serie}/>
              )
            }
          </div>

            <input className="" type="submit" value="Enregistrer"/>
        </form>
    </div>
  );
}



