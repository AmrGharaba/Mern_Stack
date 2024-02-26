import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Messages from './Messages';

function Chat() {
    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        socket.on('send_data_to_client', (data) => {
            console.log('Data received from server:', data);
            setMessages(messages => {
                return [...messages, data]
            });
        });
        return () => {

            socket.off('send_data_to_client');
        };
    }, [socket]);

    useEffect(() => {
        console.log(messages)
    }, [messages])

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('event_from_client', message);
    }

    return (
        <div>
            <Messages messages={messages} handleSubmitProb={sendMessage} message={message} setMessage={setMessage}></Messages>
        </div>
    );
}

export default Chat;
