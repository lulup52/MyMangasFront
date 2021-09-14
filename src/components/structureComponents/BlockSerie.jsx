import React, { useState, useEffect } from 'react';
import Axios from 'axios';

/* ------------------show the title and the serie picture ---------------------*/
export default function BlockTome({serie, modalFunction}) {
    
    console.log(serie)

    return (

    <>
        <div className='blockManga' onClick={e => modalFunction(serie)}>

        <div className='titleBLockMangas'>{serie.serie_title}</div>
        <div className='imgContainer'>
        <img src={serie.ilustration} />
        </div>

        </div>
    </>
    )
}

