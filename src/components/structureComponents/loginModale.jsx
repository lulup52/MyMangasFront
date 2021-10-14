import React, { useState } from 'react';
import Button from '../designComponent/Button';
import '../style/sass/basicsElements.css';
import Axios from 'axios';

export default function LoginModale({parentFunction}) {
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    
    const conexion = () =>{

        Axios.get(``)
        .then((response) => {''})
        .then((response) => {''})

        let userN = document.getElementById("userName").value
        let passW = document.getElementById("passWord").value
        userN = userN.replace(/[^a-zA-Z0-9-]/g, '')
        setUserName(userN)
        setPassWord(passW) 
        console.log(`pass ${passW}, username ${userN }`)

    }

    return (
        <div className='modaleLoginContainer'>
            <div className='modaleLogin'>
                <Button adress={'function'} onclickFunction={parentFunction} content={"x"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />
                
                <label htmlFor="userName">userName :</label>
                <input type="text" id="userName" name="userName" />

                <label htmlFor="passWord">passWord :</label>
                <input type="password" id="passWord" name="passWord" />

                <Button adress={'function'} onclickFunction={conexion} content={"conexion"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />

            </div>
        </div>
    );
}



