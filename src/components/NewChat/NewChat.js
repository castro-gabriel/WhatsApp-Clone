import React, { useState } from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './NewChat.css'


export default ({chatlist, user, show, setShow}) => {

    const [list, setList] = useState([
        {
            id: 1234,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Gabriel Castro'
        },
        {
            id: 1234,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Gabriel Castro'
        },
        {
            id: 1234,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Gabriel Castro'
        },
        {
            id: 1234,
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Gabriel Castro'
        }
    ])

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
                <div className="newChat--btnBack" onClick={handleClose} >
                    <ArrowBackIosIcon style={{color: '#000'}}/>
                </div>

                <div className="newChat--headTitle">Nova conversa</div>
            </div>

            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemAvatar" src={item.avatar} alt="" />
                        <div className="newChat--itemName"> {item.name} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}