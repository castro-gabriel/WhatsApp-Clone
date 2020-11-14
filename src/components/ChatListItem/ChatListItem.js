import React from 'react'
import './ChatListItem.css'

export default ({onClick, active, data}) => {
    return (
        <div 
            className={`chatListItem ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <img className="chatListItem--avatar" src={data.avatar} alt=""/>
            <div className="chatListItem--lines">
                
                <div className="chatListItem--line">
                    <div className="chatListItem--name">{data.title}</div>
                    <div className="chatListItem--date">20:00 AM</div>
                </div>

                <div className="chatListItem--line">
                    <div className="chatListItem--lastMessage">
                        <p>Hello! How're You DoingHello! How're You DoingHello! How're You Doing?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}