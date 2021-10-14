import React from 'react';
import Button from '../designComponent/Button';
import '../style/sass/basicsElements.css';

export default function loginModale({parentFunction}) {
  
    return (
        <div className='modaleLoginContainer'>
            <div className='modaleLogin'>
                <Button adress={'function'} onclickFunction={parentFunction} content={"x"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />
                
            </div>
        </div>
    );
}



