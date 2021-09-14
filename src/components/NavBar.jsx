import React from 'react';
import ButtonPerso from './designComponent/Button';

export default function NavBar() {

    return (
    <div className='navBar'>
        <ButtonPerso adress={'back'} content={"<"} defaultClasse={"backButton "} classeClicked={"backButtonPressed"} />
    </div>
  );
}




