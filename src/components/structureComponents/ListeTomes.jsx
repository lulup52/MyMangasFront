import React, { useState } from 'react';
import ButtonPerso from '../designComponent/Button';
import Axios from 'axios';

// import Axios from 'axios';

/* ------------------show the title and the serie picture ---------------------*/
export default function ListeTome({serieId, userId, parentFunction}) {
    
    const [modaleTomesListe, setModaleTomesListe] = useState(false);  
    const [tomeListe, setTomeListe] = useState([]);  

    const showTomes= () => {
      Axios.get(` http://localhost:8000/api/series/alltomes_serie/${serieId}`)
      
      .then((response) => {setTomeListe(response.data) })
      .then((response) => {setModaleTomesListe(!modaleTomesListe)})
    }

    const addTomeToCollection = (tomeId) => {
      Axios.post(`http://localhost:8000/api/collection/tome_collection_add/${userId}/${tomeId}`)
      
      .then((response) => {parentFunction()})
      
    }



    return (

    <>
     <div>
     <ButtonPerso adress={'function'} content={modaleTomesListe? "x" : "add"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={showTomes}/>
         
         {modaleTomesListe ? 
         <div>
           {
             tomeListe.map(tome => {
              return ( <button key={`keyButton${tome.tomeID}`} onClick={() => addTomeToCollection(tome.tomeID)}>{`add ${tome.serie_title} ${tome.num_tome}`}</button>)
             })
           }
         </div>
        : 
        "close"
        }
     </div>
    </>
    )
}

