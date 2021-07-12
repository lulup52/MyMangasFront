import React from 'react';
import Button from './designComponent/Button';
import './style/home.css';
import './style/basicsElements.css';

export default function Home() {
   
    return (
    <div className="menuHome">
        <h1>Home</h1>
        <div className='menuChoice'>
          <Button adress={"movies"} content={"movies liste"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
          <Button adress={"collection"} content={"your collection"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
          <Button adress={"full_liste"} content={"Liste complète"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
        </div>
    </div>
  );
}



