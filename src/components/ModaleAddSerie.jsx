import React from 'react';
import {

    Link,
  } from 'react-router-dom';

import Button from './designComponent/Button';
import './style/modaleAddSeries.css';
import './style/sass/basicsElements.css';

export default function ModaleSerie({manageModaleAdd}) {
   
    return (
    <div className='modale'>
    
      <Button adress={'function'} content={"x"} defaultClasse={"exitButton"} classeClicked={"exitButtonClicked"} onclickFunction={manageModaleAdd} />
      
      <form action="">
        <label for="titreSerie"></label>
        <input placeholder="titre de la série" type="text" id="titreSerie" name="titreSerie"></input>
        <br/>
        <label for="AuthorSerie"></label>
        <input placeholder="Qui est l'auteur" type="text" id="AuthorSerie" name="AuthorSerie"></input>
        <br/>
        <label for="numberBookSerie"></label>
        <input placeholder="Combien de tome" type="text" id="numberBookSerie" name="numberBookSerie"></input>
        <br/>
        <label for="sumarry"></label>
        <textarea placeholder="Résumé de la série" id="sumarry" name="sumarry" rows="5" cols="33"></textarea>
        <br/>
        <label for="ilustration"></label>
        <input placeholder="adresse de l'ilustration" type="text" id="ilustration" name="ilustration"></input>
        <br/>
        <input type="submit" value="Envoyer le formulaire"/>

      </form>
    </div>
  );
}



