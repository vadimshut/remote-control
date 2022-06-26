import { createWebSocketStream, WebSocket } from 'ws';
import { ExtWebSocket } from '../interfaces/extWs';
import readable from './readable';
import { router } from './router';

export const onConnect = (ws: WebSocket) => {
  console.log('New user connected to WS\n');
  ws.send('Connected to WS...');
  const extWs = ws as ExtWebSocket;
  extWs.isAlive = true;
  ws.on('pong', () => (extWs.isAlive = true));

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
  duplex.on('readable', readable(duplex));

  ws.on('close', () => console.log('WS connection lost...\n'));
};
