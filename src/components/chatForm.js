import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosAuth.js'

const ChatForm = (props) => {
    const [text, setText] = useState({text: ""})

    const handleChange = (e) => {
        setText({...text, [e.target.name]: e.target.value})
    }

    const send = e => {
        e.preventDefault()
        props.send(text)
    }


    console.log(text)

    return (
        <div>
            <form className="text-form" onSubmit={send}>
                <input    
                    type="text"
                    name="text"
                    onChange={handleChange}
                    value={text.value}
                />
                <button>send</button>
            </form>
        </div>
    )
}

export default ChatForm;