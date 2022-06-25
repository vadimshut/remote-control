import Jimp from 'jimp'
import { httpServer } from './src/http_server/index.js'
import robot from 'robotjs'
import { WebSocketServer, createWebSocketStream } from 'ws'
import { drawCircle } from './src/utils/drawCircle.js'
import { wssHandlerConnection } from './src/http_server/wssHandlerConnection.js'
import { getPort } from './src/utils/getPort.js'


const WSS_PORT =  getPort('wss')
const HTTP_PORT = getPort('http')

robot.setMouseDelay(2);

console.log(`Start static http server on the ${HTTP_PORT} port!`)
httpServer.listen(HTTP_PORT)


const wss = new WebSocketServer({ port: WSS_PORT })
wss.on('connection', wssHandlerConnection)
console.log(`WS server started on ${WSS_PORT} port!`);






























// ws.on('connection', function connection(ws) {
//   console.log("Connection is successfuly...");
  
//   ws.on('message', function message(data) {
//     console.log('cmd from frontendived: %s', data)

//     if(data.toString().startsWith('mouse_up')) {
//       const screenSize = robot.getScreenSize();
//       const width = screenSize.width;
//       const height = screenSize.height;
//       console.log(width, height);
//       const {x: currentX, y: currentY} = robot.getMousePos()
//       console.log(currentX, currentY);
      
//       robot.moveMouseSmooth(currentX, currentY + 10);
//       ws.send('something')
//     }

//     if(data.toString().startsWith('mouse_down')) {
//       drawCircle(50)
//     }
//   })

  
// })




// wss.on('connection', ws => {
//   console.log('New connection...');
  
//   const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
//   duplex.on('data', chunk => {
//     console.log(chunk);
    
//   })
//   duplex.on('end', () => console.log('end!!!!')
//   )
// })
