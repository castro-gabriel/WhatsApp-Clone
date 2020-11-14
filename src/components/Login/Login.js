import React from 'react'
import Api from '../../Api'

import './Login.css'

import logo from '../../assets/logo.png'

export default ({onReceive}) => {

    // login
    const handleFacebookLogin = async () => {
        let result = await Api.facebookPopUp()

        if (result) {
            onReceive(result.user)
        } else {
            alert('Error!')
        }
    }




    return (
        <div className="login">
            <img src={logo} alt="" />
            <h1>Chat Anyone</h1>
            <h2>Conheça novas pessoas aleatórias</h2>
            <h3>Suas mensagens não são salvas. São apagadas antes que você imagine.</h3>
        
            <button onClick={handleFacebookLogin}>Login with Facebook</button>

        </div>
    )
}