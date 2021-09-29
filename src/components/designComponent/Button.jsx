import React from 'react';
import {

    Link,
    useHistory, 
  } from 'react-router-dom';
  import '../style/sass/basicsElements.css';
  import '../style/fullListe.css';

export default function Home({adress, content, defaultClasse ,classeClicked, onclickFunction}) {
    let history = useHistory();

/* ------------ gestion de l'annimation du bouton */

    const pressedButton = (e) => {
      e.preventDefault()
      
      /*bouton cliké*/
      e.target.classList.add(`${classeClicked}`)
      setTimeout(function() {
        /* le bouton remonte*/
        e.target.classList.remove(`${classeClicked}`)
        setTimeout(function() {
          /* choix de la fonction*/
          switch (adress) {
            case 'back' : 
              history.goBack();
            break;

            case 'function' : 
              onclickFunction()
              break;

            default :
              history.push(`/${adress}`);
              break;
            
          }
        }, 100);
      }, 200);

    }
    
  return (
        <div className='buttonHeightHolder'>
          <div>
          <Link className={defaultClasse} to={`/${adress}`} id={`${adress}`} onClick={(e) => pressedButton(e)}>
              {content}
          </Link>
          </div>
          
        </div>
      )
    
  
}



