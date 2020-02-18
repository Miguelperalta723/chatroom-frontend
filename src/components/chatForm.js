import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosAuth.js'

const ChatForm = (props) => {
    const [text, setText] = useState("")
    
    const send = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/messages/add', text)
        .then(res => {
            console.log(res)
        })
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    console.log(text)

    return (
        <div>
            <form className="text-form" onSubmit={send}>
                <input    
                    type="text"
                    name="text"
                    onChange={handleChange}
                />
                <button>send</button>
            </form>
        </div>
    )
}

export default ChatForm;