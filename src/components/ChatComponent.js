import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
//   const [loggedUser, setLoggedUser] = useState('');
  const newSocket = io('http://localhost:5000'); // Adjust the server URL

  useEffect(() => {

    newSocket.on('connect', () => {
        console.log('Connected to the Socket.io server');
      });
    // Listen for incoming chat messages
    newSocket.on('chat message', (msg) => {
        const {message, email} = msg;
        console.log(message + email);
        // // alert('message : ${msg}')
        // setLoggedUser(email)
        setMessages((prevMessages) => [...prevMessages, msg]);
    //   setMessages([...messages, message]);
    });

    return () => {
      // Clean up the socket connection when the component unmounts
      newSocket.disconnect();
    };
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage) {
        newSocket.emit('chat message', { message: newMessage, email: localStorage.getItem('email')});
        // { message: newMessage, email: localStorage.getItem('email')}
      setNewMessage('');
    }
  };

  return (
    <div>
      <div>
        {/* {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))} */}
        {messages.map((msg, index) => (
            <div key={index} className="chat-message">
            {msg.message} {msg.email}   
            </div>
          ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
