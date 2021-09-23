import React, { useState } from 'react';
import ButtonPerso from '../designComponent/Button';
import Axios from 'axios';

// import Axios from 'axios';

/* ------------------show the title and the serie picture ---------------------*/
export default function ListeTome({parentComponent,serieId, userId, parentFunction}) {
    
    const [modaleTomesListe, setModaleTomesListe] = useState(false);  
    const [tomeListe, setTomeListe] = useState([]);  
    console.log(serieId)

    const showTomes= () => {
      let url=''
      if(parentComponent==="modalCollection") {
        url = `http://localhost:8000/api/collection/tome_notin_collection_by_serie/${userId}/${serieId}`
      } else if(parentComponent==="modalAddCollection") {
        url = `http://localhost:8000/api/series/alltomes_serie/${serieId}`

      }
      Axios.get(`${url}`)
      .then((response) => {setTomeListe(response.data) })
      .then((response) => {setModaleTomesListe(!modaleTomesListe)})
    }

    const addTomeToCollection = (tomeId) => {
      showTomes()
      Axios.post(`http://localhost:8000/api/collection/tome_collection_add/${userId}/${tomeId}`)
      
      .then((response) => {
          parentFunction(parentComponent)
          if(parentComponent==="modalCollection") {
            
          } else {
            parentFunction(parentComponent)
          }
      })
      
    }

    return (

    <>
     <div>
      
     <ButtonPerso adress={'function'} content={modaleTomesListe? "x" : "add"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={showTomes}/>
         
         {modaleTomesListe ? 
            <div>
              {
                tomeListe.fullCollection !== undefined  ?
                <div>{tomeListe.fullCollection}</div>
                :
                tomeListe.map(tome => {
                
                  return ( <button id={`tomeAddButton${tome.tomeId}`} key={`keyButton${tome.tomeId}`} onClick={() => addTomeToCollection(tome.tomeId)}>{`add ${tome.serie_title} ${tome.num_tome} ${tome.tomeId}`}</button>)
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

