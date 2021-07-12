import Axios from 'axios';
import NavBar from './NavBar';
import React, { useState, useEffect } from 'react';
import tempDatas from "../temporaryDB/dbTest.json"
import {
  Link,
} from 'react-router-dom';
import './style/allListe.css';


export default function Collection() {
// préparer l'axios pour ne récupérer que les séries présentes dans la colection de l'utilisateur
  const colectionListe = tempDatas.liste_serie_colection
    return (
    <>
      <div className="pageContainer">
        <div className='titreButton'>
          <h2 className='titrePage'>Your collection</h2>
         
        </div>
        <div className='mangaCollectionContainer'>
        {
          colectionListe.map(colection => 
            <div className='blockManga' >
            <div className='titleBLockMangas'>{colection.title}</div>
            <div className='imgContainer'>
                  <img src={colection.ilustration} />
                </div>

            </div>
            )
          }
        </div>
      </div>
      <div className='navBarContainer' >
        <NavBar />
      </div>
      
      
    </>
  );
}