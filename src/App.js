//  import { Divider } from '@material-ui/core'
import React, { useState, useEffect} from 'react'
import './App.css'

import ChatListItem from './components/ChatListItem/ChatListItem'
import ChatIntro from './components/ChatIntro/ChatIntro'
import ChatWindow from './components/ChatWindow/ChatWindow'
import NewChat from './components/NewChat/NewChat'
import Login from './components/Login/Login'

import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

    const [chatlist, setChatList] = useState([
        {chatId: 1, title: 'Fulano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 2, title: 'Fulano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 3, title: 'Fulano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'},
        {chatId: 4, title: 'Fulano de tal', avatar: 'https://www.w3schools.com/howto/img_avatar.png'}
    ])
    const [activeChat, setActiveChat] = useState({})
    const [user, setUser] = useState(null)
    const [showNewChat, setShowNewChat] = useState(false)

    const handleNewChat = () => {
        setShowNewChat(true)
    }

    const handleLogin = async (u) => {
        let newUser = {
            id: u.uid,
            name: u.displayName,
            avatar: u.photoURL
        };

        setUser(newUser)
    }

    if (user === null) {
        return (
            <Login 
                onReceive={handleLogin}
            />
        )
    }

    return (
        // ------------ MAIN WINDOW
        <div className="app-window">
            

            {/* ------------ SIDEBAR ------------- */}
            <div className="sidebar">

                <NewChat 
                    chatlist={chatlist}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                
                {/* ------------ AVATAR + BUTTONS ------------ */}
                <header>
                
                    <img className="header--avatar" src={user.avatar}  alt=""/>
                    <div className="header--buttons">
                        
                        <div onClick={handleNewChat} className="header--btn">
                            <ChatIcon style={{color: '#FFF'}}/>
                        </div>

                        <div className="header--btn">
                            <MoreVertIcon style={{color: '#FFF'}}/>
                        </div>

                    </div>
                
                </header>
                {/* ------------ SEARCH ------------ */}
                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{color: '#414141'}}/>
                        <input type="search" placeholder="Pesquise por alguém" />
                    </div>
                </div>

                {/* -------- CHATLIST ------------ */}
                <div className="chatlist">
                    {chatlist.map((item, key) => ( 
                        <ChatListItem 
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatlist[key].chatId}
                            onClick={() => setActiveChat(chatlist[key])}
                        />
                    ))}
                </div>

            </div> {/* ------------ END OF SIDEBAR ------------- */}
                        

            {/* ---------- CONTENT AREA ------------*/}
            <div className="content-area">
                {activeChat.chatId !== undefined && 
                    <ChatWindow 
                        user={user}
                    />
                }

                {activeChat.chatId === undefined &&
                    <ChatIntro />                
                }

            </div>

            

        </div>
    )
}