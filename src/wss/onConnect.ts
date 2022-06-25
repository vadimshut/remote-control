import { WebSocket } from 'ws';
import { router } from './router';

export const onConnect = (ws: WebSocket) => {
    console.log("New user connected to WS");
    ws.send("Connected to WS...");

    ws.on("message", function (message: Buffer) {
      const receivedCommand = message.toString("utf8").split(" ");
      router(receivedCommand, ws)       
    })
    ws.on('close', () => {
        console.log("WS connection lost...\n");
    })
}