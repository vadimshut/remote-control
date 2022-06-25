import { moove } from './handler-commands/moove';

export const router = (command: string[]) => {
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
      break;
    case 'draw_circle ':
      break;
    case 'draw_rectangle':
      break;
    case 'draw_square':
      break;
    case 'draw_square':
      break;
  }
};
