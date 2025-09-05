import {prismaClient} from '@repo/db/client';
import {WebSocketServer} from 'ws';


const wss = new WebSocketServer({port: 8001});

wss.on('connection', async function connection(ws) {
  ws.on('message', async function message(data) {
    console.log('received: %s', data);

    const users = await prismaClient.user.findMany();
    console.log(users);

    ws.send(`Hello, you sent -> ${data}`);
    ws.send(`Database has ${await prismaClient.user.count()} users`);
  });

  ws.send('Hi there, I am a WebSocket server');
  
});

console.log('WebSocket server is running on ws://localhost:8080');