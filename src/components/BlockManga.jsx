import React, { useState, useEffect } from 'react';
import Axios from 'axios';


export default function BlockManga({serie}) {
    const [listeTomeOpen, setListeTomeOpen] = useState(false);  
    const [listeTome, setListeTome] = useState([]);

    const openTomesListe =() => {

        if (listeTome === []) {
            Axios.get(`http://localhost:8000/api/serie/alltomes_serie/${serie.id}`)
            .then((response) => {setListeTome("brupt") })


        }
        setListeTomeOpen(!listeTomeOpen)
        console.log(listeTome)


      }


    return (

    <div className='serieAndTomes'>
        <div className='blockManga' onClick={openTomesListe}>
            <div className='titleBLockMangas'>{serie.title}</div>
            <div className='imgContainer'>
            <img src={serie.ilustration} />
            </div>
        </div>
        {
        listeTomeOpen? 
        <div className="tomeListe">

        </div>
        :
        ""
        }
    </div>
    )
}