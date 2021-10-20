import React, { useState, useEffect } from 'react';
import Button from '../designComponent/Button';
import '../style/sass/basicsElements.css';
import Axios from 'axios';

export default function LoginModale({parentFunction, authTokenSeter, oldTokenParent}) {

    

    const [oldToken, setOldToken] = useState(oldTokenParent)
    const [newToken, setNewToken] = useState("")
    const [username, setUsername] = useState("")
    const [mdp, setMdp] = useState("")
    
    const conexion = () =>{
        // let userN = document.getElementById("username").value
        // userN = userN.replace(/[^a-zA-Z0-9-]/g, '')
        if (username !== "" && mdp !== "" ) {
            let url = "http://localhost:8000/api/users/login"

            Axios.post(url, {
                username,
                mdp
              })
              .then((response) => console.log(response.data[0].token) )
            //   .then((response) => authTokenSeter(newToken) )
            
            // parentFunction()
        }
    }

    return (
        <div className='modaleLoginContainer'>
            <div className='modaleLogin'>
                <Button adress={'function'} onclickFunction={parentFunction} content={"x"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />
                
                <label className='modaleComponent' htmlFor="username">username :</label>
                <input className='modaleComponent' type="text" id="username" name="username" onChange={(e) =>setUsername(e.target.value)} />

                <label className='modaleComponent' htmlFor="mdp">mdp :</label>
                <input className='modaleComponent' type="password" id="mdp" name="mdp"  onChange={(e) =>setMdp(e.target.value)} />

                <Button adress={'function'} onclickFunction={conexion} content={"conexion"} defaultClasse={"backButton"} classeClicked={"backButtonPressed"} />

            </div>
        </div>
    );
}



