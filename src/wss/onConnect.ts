export const onConnect = (ws: WebSocket) => {
    console.log("New user connected to WS");
    ws.send("Connected to WS...");
}