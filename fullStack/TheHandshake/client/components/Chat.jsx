import React from 'react'
import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';

function Chat() {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        console.log('is this running');
        socket.on('welcome', data => console.log(data));
        return () => socket.removeAllListeners;
    }, [socket]);

    return (
        <h1> The Handshake Assignment</h1>
    )
}

export default Chat