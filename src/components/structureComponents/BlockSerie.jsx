import React /*, { useState, useEffect }*/ from 'react';
// import Axios from 'axios';

/* ------------------show the title and the serie picture ---------------------*/
export default function BlockSerie({serie, modalFunction}) {
    
    const liste= () => {
        
        if(modalFunction === ""){
            return (<div className='blockManga'>
                <div className='titleBLockMangas'>{serie.serie_title}</div>
                <div className='imgContainer'>
                <img src={serie.ilustration} alt={`here is an visual representation of the manga ${serie.serie_title}`}/>
                </div>
            </div>)
        } else {
            return (<div className='blockManga' onClick={e => modalFunction(serie)}>
                <div className='titleBLockMangas'>{serie.serie_title}</div>
                <div className='imgContainer'>
                <img src={serie.ilustration} alt={`here is an visual representation of the manga ${serie.serie_title}`}/>
                </div>
            </div>)
        }
    } 

    return (

    <>
        {liste()}
        
    </>
    )
}

