import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import ButtonPerso from './designComponent/Button';
import './style/collectionListe.css';


export default function CollectionAdd({parentFunction, allUserCollections, userId}) {
  
    const [seriesNotInCOllection, setSeriesNotInCOllection] = useState([]);  

    useEffect(() => {
    Axios.get(`http://localhost:8000/api/collections/serie_notin_collection/${userId}`)
        .then((response) => {setSeriesNotInCOllection(response.data) })
      
        
    },[])



    // const handleSubmit = () => {
    //   Axios.post(`http://localhost:8000/api/movies/post`, {
    //   })
    //   .then((res) => {
    //   });
    // } 

    return (
    <div className='modaleAddCollection'>
      <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={parentFunction} />

        <div>Ajout d'un nouveau film</div>
        <form >
            <div className="">
                <label htmlFor="titre">titre</label><br/>
                <input className="" type="text" name="title" placeholder="chose a série to add"/>
            </div>
            
          <div className='addSerieColelction'>
          {
            seriesNotInCOllection.map(serie => 
              <div className='blockManga' >
  
                <div className='titleBLockMangas'>{serie.title}</div>
                <div className='imgContainer'>
                  <img src={serie.ilustration} />
                </div>
  
              </div>
              )
            }
          </div>

            <input className="" type="submit" value="Enregistrer"/>
        </form>
    </div>
  );
}



