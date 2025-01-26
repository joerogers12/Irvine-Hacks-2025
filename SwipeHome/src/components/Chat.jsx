import { useState, useEffect } from 'react'
function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/chat');
    setWs(socket);

    socket.onmessage = (event) => {
      console.log(event)
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onclose = () => {
      console.log('Disconnected from server');
    };

    socket.onerror = (error) => {
      console.log('Error occurred:', error);
    };
  }, []);

  const handleSendMessage = () => {
    ws.send(newMessage);
    setNewMessage('');
  };

  return (
    <div className="App">
      <h1>Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chat