import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';


import './style/basicsElements.css';
import './style/collectionListe.css';
import {
  Link,
} from 'react-router-dom';

import CollectionAdd from './collectionAdd'
export default function LectureListe() {
    
    const [lecture, setLecture] = useState([])
    useEffect(() => {
      Axios.get(`http://localhost:8000/api/movies`)
  
      .then((res) => {
        setLecture(res.data)

      });
    }, []);

  

   

    return (

    <>
      <div className='movvieListePage'>
        hello
      </div>
      <div className='navBarContainer' >
        <NavBar />
      </div>    </>
  );
}
