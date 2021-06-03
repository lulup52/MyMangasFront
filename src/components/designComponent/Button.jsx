import React from 'react';
import {

    Link,
    useHistory, 
  } from 'react-router-dom';

export default function Home({adress, content}) {
    let history = useHistory();

/* ------------ gestion de l'annimation du bouton */

    const pressedButton = (e) => {
      e.preventDefault()

      /*bouton cliké*/
      e.target.classList = "clickableButtonPressed"

      setTimeout(function() {

        /* le bouton remonte*/
        e.target.classList = "clickableButton"

        setTimeout(function() {
          /* redirection*/
          history.push(`/${adress}`)
        }, 300);
        console.log("hey")
      }, 500);
      
      
    }
    
    switch (adress) {
      case 'home':return (
        <div className='buttonHeightHolder'>
          <Link className="clickableButton" to={`/${adress}`} id={`${adress}`} onClick={() => history.goBack()}>
              {content}
          </Link>
        </div>
      )
      
      default : return (
        <div className='buttonHeightHolder'>
          <Link className="clickableButton" to={`/${adress}`} id={`${adress}`} onClick={(e) => pressedButton(e)}>
              {content}
          </Link>
        </div>
      )
    }
  
}



