import Jimp from 'jimp';
import {httpServer} from './src/http_server/index.js';
import robot from 'robotjs';
import { WebSocketServer } from 'ws';

import {getPort} from './src/utils/getPort'
import {onConnect} from './src/wss/onConnect'

const HTTP_PORT = getPort('http');
const WSS_PORT = getPort('wss')

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WSS_PORT });



wss.on("connection", onConnect);
console.log(`Start WS server on ${WSS_PORT} port!\n`);


