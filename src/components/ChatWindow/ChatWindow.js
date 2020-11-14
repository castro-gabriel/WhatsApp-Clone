import React, { useState, useEffect, useRef } from 'react'
import EmojiPicker from 'emoji-picker-react'

import './ChatWindow.css'

import MessageItem from '../MessageItem/MessageItem'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { EmojiObjects } from '@material-ui/icons';

export default ({user}) => {
  
    const body = useRef()

    // Para o microfone funcionar
    let recognition = null
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    
    if (SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition()
    }


    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState('')
    const [listening, setListening] = useState(false)
    const [list, setList] = useState([
        {author:1234, body:'Olá, Mundo!'}, 
        {author:234, body:'How are you doing? '}, 
        {author:345, body:'Nihao! How are you doing? How are you doing? How are you doing?'},
        {author:1234, body:'Olá, Mundo!'}, 
        {author:1234, body:'How are you doing? '}, 
        {author:345, body:'Nihao! How are you doing? How are you doing? How are you doing?'},
        {author:1234, body:'Olá, Mundo!'}, 
        {author:234, body:'How are you doing? '}, 
        {author:1234, body:'Nihao! How are you doing? How are you doing? How are you doing?'},
        {author:345, body:'Nihao! How are you doing? How are you doing? How are you doing?'},
        {author:1234, body:'Olá, Mundo!'}, 
        {author:234, body:'How are you doing? '}, 
        {author:1234, body:'Nihao! How are you doing? How are you doing? How are you doing?'},
    ])

    // Fazer as contas para mostrar o final do chat
    useEffect(() => {
        if (body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji )
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleSendClick = () => {

    }

    // Estamos dizendo o que deve ser feito
    // Primeiro instruções e depois o START
    const handleMicClick = () => {
        if (recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }

            recognition.onend = () => {
                setListening(false)
            }

            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript )
            }

            recognition.start()
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
                
                <div className="chatWindow--headerInfo">
                    <img className="chatWindow--headerAvatar" src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
                    <div className="chatWindow--headerName">Gabriel Castro</div>
                </div>

                <div className="chatWindow--headerButtons">
                    <div className="chatWindow--btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>
                    
                    <div className="chatWindow--btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow--btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div>
                </div>

            </div>

            <div ref={body} className="chatWindow--body">

                {list.map(( item, key ) => (
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}

            </div>

            
            {/** EMOJI AREA ----------------------------------------------*/}
            <div className="chatWindow--emojiArea" style={{height: emojiOpen ? '250px' : '0px'}}>
                <EmojiPicker
                    disableSkinTonePicker
                    disableSearchBar
                    onEmojiClick={handleEmojiClick}
                />
            </div>

            <div className="chatWindow--footer">

                <div className="chatWindow--pre">

                    <div 
                        className="chatWindow--btn" 
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? '40px' : '0px'}}
                    >
                        <CloseIcon style={{color: '#FFF'}} />
                    </div>

                    <div 
                        className="chatWindow--btn" 
                        onClick={handleOpenEmoji}
                    >
                        <EmojiEmotionsIcon style={{color: emojiOpen ? '#F07E20' : '#FFF'}} />
                    </div>

                </div>

                <div className="chatWindow--inputArea">

                    <input 
                        className="chatWindow--input" 
                        type="text" 
                        placeholder="Digite uma mensagem aqui"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />

                </div>

                <div className="chatWindow--pos">

                    {text !== '' &&
                        <div 
                            className="chatWindow--btn"
                            onClick={handleSendClick}
                        >
                            <SendIcon style={{color: '#FFF'}} />
                        </div>
                    }

                    {text === '' &&
                        <div 
                            className="chatWindow--btn"
                            onClick={handleMicClick}
                        >
                            <MicIcon style={{color: listening ? '#F07E20    ' : '#FFF'}} />
                        </div>
                    }
                </div>

            </div>

        </div>
    )
}