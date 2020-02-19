import React, { useState , useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth.js'
 
import MessageCard from './messageCard.js'
import ChatForm from './chatForm.js'

import './messages.scss'

const Messages = (props) => {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState({text: ""})

    const handleChange = (e) => {
        setText({...text, [e.target.name]: e.target.value})
    }


    useEffect(() => {
        axiosWithAuth()
        .get('api/messages/messages')
        .then(res =>{
            setMessages(res.data.response)
        })
        .catch(err => {
            console.log(err)
        })
    },[messages])

      const send = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/messages/add', text)
        .then(res => {
            setText({text: ""})
        })
        .catch(err => {
            console.log(err)
        })
    }

    const logout = () => {
        console.log(props)
        localStorage.removeItem('token');
        props.history.push("/login")
    }

    return (
        <div className="messages-container">
            <div className="messages">
                {messages.map(mess => {
                    return <p key={mess.id}>{mess.text}</p>
                })}
            </div>
            <div className="chatForm"> 
                <form className="text-form" onSubmit={send}>
                <input    
                    type="text"
                    name="text"
                    value={text.text}
                    onChange={handleChange}
                />
                 <button >send</button>
                </form>
               
            </div>
            <button className="logout" onClick={logout}>log out</button>
            
        </div>
    )
}

export default Messages;