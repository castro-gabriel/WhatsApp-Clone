import React from 'react'
import './ChatIntro.css'

import logo from '../../assets/logo.png'

export default () => {
    return (
        <div className="chatIntro">
            <img src={logo} alt="" />
            {/** https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png */}
            <h1>Conheça novas pessoas!</h1>
            <h2>Pesquise por nome ou inicie uma conversa aleatória.</h2>
        </div>
    )
}