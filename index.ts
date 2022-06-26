import { httpServer } from './src/http_server/index.js';
import { WebSocketServer } from 'ws';

import { getPort } from './src/utils/getPort';
import { onConnect } from './src/wss/onConnect';
import { ExtWebSocket } from './src/interfaces/extWs.js';

const HTTP_PORT = getPort('http');
const WSS_PORT = getPort('wss');

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WSS_PORT });

wss.on('connection', onConnect);
console.log(`Start WS server on ${WSS_PORT} port!\n`);

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    const extWs = ws as ExtWebSocket;
    if (extWs.isAlive === false) return ws.terminate();

    extWs.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', function close() {
  console.log(13);

  clearInterval(interval);
});
