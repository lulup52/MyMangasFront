import React from 'react';
import {

    Link,
  } from 'react-router-dom';

import './style/modaleSeries.css';

export default function ModaleSerie({modaleData}) {
   
    return (
    <div className='modale'>
       {/* <div className='exitButtonModale'>
        <p>+</p>
      </div> */}
      <div className='modaleTitle'>{modaleData.title}</div>
      <div className='modaleImage'>
        <img src={modaleData.ilustration} />
      </div>
      <div className='modaleAuthor'>{modaleData.author}</div>
      <div className='modaleSerieDescribe'>
        <p>{modaleData.sumary}</p>
      </div>

    </div>
  );
}



