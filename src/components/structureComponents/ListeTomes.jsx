import React, { useState } from 'react';
import ButtonPerso from '../designComponent/Button';

// import Axios from 'axios';

/* ------------------show the title and the serie picture ---------------------*/
export default function ListeTome({serieId}) {
    
    const [modaleTomesListe, setModaleTomesListe] = useState(false);  

    const addSerieToColelction= (serie) => {
      setModaleTomesListe(!modaleTomesListe)
    }



    return (

    <>
     <div>
     <ButtonPerso adress={'function'} content={"×"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} onclickFunction={addSerieToColelction}/>
         
         {modaleTomesListe ? 
         "open"
        : 
        "close"
        }
     </div>
    </>
    )
}

