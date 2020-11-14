import React from 'react'

import './MessageItem.css'

export default ({data, user}) => {
    return (
        <div 
            className="messageLine" 
            style={{
                justifyContent: user.id === data.author ? 'flex-start' : 'flex-end'
            }}
        >

            <div 
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? '#ec8530' : '#FFF'
                }}
            >
                <div className="messageText">{data.body}</div>
                <div className="messageDate">
                    23:00
                </div>
            </div>
        </div>
    )
}