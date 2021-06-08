import React from 'react';
import {

    Link,
  } from 'react-router-dom';

import Button from './designComponent/Button';
import './style/modaleAddSeries.css';
import './style/basicsElements.css';

export default function ModaleSerie({manageModaleAdd}) {
   
    return (
    <div className='modale'>
    
      <Button adress={'function'} content={"x"} defaultClasse={"exitButton"} classeClicked={"exitButtonClicked"} onclickFunction={manageModaleAdd} />
      
      <form action="">
        <label for="titreSerie">titre de la série</label>
        <input type="text" id="titreSerie" name="titreSerie"></input>
        <br/>
        <label for="AuthorSerie">Qui est l'auteur</label>
        <input type="text" id="AuthorSerie" name="AuthorSerie"></input>
        <br/>
        <label for="numberBookSerie">Combien de tome</label>
        <input type="text" id="numberBookSerie" name="numberBookSerie"></input>
        <br/>
        <label for="sumarry">Résumé de la série</label>
        <input type="text" id="sumarry" name="sumarry"></input>
        <br/>
        <label for="ilustration">adresse de l'ilustration</label>
        <input type="text" id="ilustration" name="ilustration"></input>
        <input type="submit" value="Envoyer le formulaire"/>

      </form>
    </div>
  );
}



