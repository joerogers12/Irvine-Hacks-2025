// server.js
const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);
const WebSocket = require('ws');

app.ws('/chat', (ws, req) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
      expressWs.getWss('/chat').clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});