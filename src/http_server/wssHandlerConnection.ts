export const wssHandlerConnection = (ws: WebSocket) => {
    console.log("Connected to WS");
    ws.send("Connected to WS");

//   ws.on('close', function () {
//     console.log('Connection lost');
//   });
};
