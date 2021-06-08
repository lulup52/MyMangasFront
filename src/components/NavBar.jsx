import Axios from 'axios';
import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import Button from './designComponent/Button';

export default function NavBar() {

    return (
    <div className='navBar'>
        <Button adress={'back'} content={"<"} defaultClasse={"backButton "} classeClicked={"backButtonPressed"} />
    </div>
  );
}




