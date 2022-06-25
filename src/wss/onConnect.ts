import { WebSocket, WebSocketServer } from 'ws';

export const onConnect = (ws: WebSocket) => {
    console.log("New user connected to WS");
    ws.send("Connected to WS...");

    ws.on("message", function (message: Buffer) {
        console.log(message);
        
    })
    ws.on('close', () => {
        console.log("WS connection lost...\n");
    })
}