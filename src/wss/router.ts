import { wssHandlerConnection } from '../http_server/wssHandlerConnection';
import { WebSocket } from 'ws';
import { getMousePosition } from '../utils/getMousePosition';
import { moove } from './handler-commands/moove';
import { drawCircle } from './handler-commands/drawCircle';
import { drawRectangular } from './handler-commands/drawRectangular';
import { drawSquare } from './handler-commands/drawSquare';

export const router = (command: string[], ws: WebSocket) => {
    console.log(command);
    
  switch (command[0]) {
    case 'mouse_up':
      if (command[1]) moove('up', +command[1]);
      break;
    case 'mouse_down':
      if (command[1]) moove('down', +command[1]);
      break;
    case 'mouse_left':
      if (command[1]) moove('left', +command[1]);
      break;
    case 'mouse_right':
      if (command[1]) moove('right', +command[1]);
      break;
    case 'mouse_position':
        const {x, y} = getMousePosition()
        ws.send(`mouse_position ${x},${y} \0`);
      break;
    case 'draw_circle':
        if (command[1]) drawCircle(+command[1])
      break;
    case 'draw_rectangle':
        if(command[1] && command[2]) drawRectangular(+command[1], +command[2])
      break;
    case 'draw_square':
        if(command[1]) drawSquare(+command[1])
      break;
    case 'draw_square':
      break;
  }
};
