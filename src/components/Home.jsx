import React, { useState, useEffect } from 'react';
import Button from './designComponent/Button';
import './style/home.css';
import './style/basicsElements.css';

export default function Home({changeUserId}) {
    

    return (
    <div className="menuHome">
        <h1>Home</h1>
        <select className='selectTest' onChange={(e)=> changeUserId(e.target.value)}>
          <option value="chose">---chose a user id ----</option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className='menuChoice'>
          <Button adress={"movies"} content={"movies liste"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
          <Button adress={"collection"} content={"your collection"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
          <Button adress={"full_liste"} content={"Liste complète"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
        </div>
    </div>
  );
}



