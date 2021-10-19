import React, { useState, useEffect } from 'react';
import Button from './designComponent/Button';
import LoginModale from './structureComponents/loginModale';
import './style/home.css';
import './style/sass/basicsElements.css';

export default function Home({changeUserId}) {
  
  useEffect(() => {
    if(authToken === '') {
      setLoginModaleOpen(!loginModaleOpen)
    }
  },[])

  const [authToken, setAuthToken] = useState('')
  const [loginModaleOpen, setLoginModaleOpen] = useState(false)

  const manageLoginModale = (send) => {
      setLoginModaleOpen(!loginModaleOpen)
  }

  const authTokenSeter = (token) => {
    setAuthToken(token)
  }
    return (
    <div className="menuHome">
        <h1>Home</h1>
        <select className='selectTest' onChange={(e)=> changeUserId(e.target.value)}>
          <option value="chose">---chose a user id ----</option>

          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Button adress={"function"} onclickFunction={manageLoginModale} content={"conection"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />

        <div className='menuChoice'>
          <Button adress={"lecture"} content={"Lecture liste"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
          <Button adress={"collection"} content={"your collection"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
          <Button adress={"full_liste"} content={"Liste complète"} defaultClasse={"clickableButton"} classeClicked={"clickableButtonPressed"} />
        </div>

        {
          loginModaleOpen ?
            <LoginModale parentFunction={manageLoginModale} authTokenSeter={authTokenSeter}/>
            :
            ""
        }
    </div>
  );
}



