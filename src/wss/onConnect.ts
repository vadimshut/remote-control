import { createWebSocketStream, WebSocket } from 'ws';
import readable from './readable';
import { router } from './router';

export const onConnect = (ws: WebSocket) => {
    console.log("New user connected to WS");
    ws.send("Connected to WS...");

    // ws.on("message", function (message: Buffer) {
    //   const receivedCommand = message.toString("utf8").split(" ");
    //   router(receivedCommand, ws)       
    // })

    const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false })
    duplex.on('readable', readable(duplex))

    


    ws.on('close', () => {
        console.log("WS connection lost...\n");
    })
}