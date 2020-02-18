import React, { useState , useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosAuth.js'
 
import MessageCard from './messageCard.js'
import ChatForm from './chatForm.js'

import './messages.scss'

const Messages = (props) => {
    const [messages, setMessages] = useState([])
    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('api/messages/messages')
    //     .then(res =>{
    //         console.log(res.data.response)
    //         setMessages(res.data.response)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },[])

    const logout = () => {
        console.log(props)
        localStorage.removeItem('token');
        props.history.push("/login")
    }

    console.log(props)
    return (
        <div className="messages-container">
            <div className="messages">
                {/* {messages.map()} */}
            </div>
            <div className="chatForm"> 
                <ChatForm />
                <button onClick={logout}>log out</button>
            </div>
            
            
        </div>
    )
}

export default Messages;