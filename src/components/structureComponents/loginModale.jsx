import React, { useState, useEffect } from 'react';
import Button from '../designComponent/Button';
import '../style/sass/basicsElements.css';
import Axios from 'axios';

export default function LoginModale({parentFunction, authTokenSeter}) {

    useEffect(() => {
        authTokenSeter('')
        },[])


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
        authTokenSeter("tokenis" + userN)
        parentFunction()
    }

    return (
        <div className='modaleLoginContainer'>
            <div className='modaleLogin'>
                <Button adress={'function'} onclickFunction={parentFunction} content={"x"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />
                
                <label className='modaleComponent' htmlFor="userName">userName :</label>
                <input className='modaleComponent' type="text" id="userName" name="userName" />

                <label className='modaleComponent' htmlFor="passWord">passWord :</label>
                <input className='modaleComponent' type="password" id="passWord" name="passWord" />

                <Button adress={'function'} onclickFunction={conexion} content={"conexion"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />

            </div>
        </div>
    );
}



