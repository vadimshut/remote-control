import { getMousePosition } from '../utils/getMousePosition';
import { moove } from './handler-commands/moove';
import { drawCircle } from './handler-commands/drawCircle';
import { drawRectangular } from './handler-commands/drawRectangular';
import { drawSquare } from './handler-commands/drawSquare';
import { getPrintScreen } from './handler-commands/getPrintScreen';
import { IRouter } from '../interfaces/IRouter';

export const router = (): IRouter => {
  const { x, y } = getMousePosition();

  return {
    mouse_up: (step: number) => {
      moove(x, y, 'up', step);
    },
    mouse_down: (step: number) => {
      moove(x, y, 'down', step);
    },
    mouse_left: (step: number) => {
      moove(x, y, 'left', step);
    },
    mouse_right: (step: number) => {
      moove(x, y, 'right', step);
    },
    mouse_position: () => `${x},${y}`,
    draw_circle: (radius: number) => drawCircle(x, y, radius),
    draw_rectangle: (width: number, height: number) => drawRectangular(x, y, width, height),
    draw_square: (line: number) => drawSquare(x, y, line),
    prnt_scrn: async () => {
      const image = await getPrintScreen(x, y, 200, 200);
      const base64 = await image.getBase64Async(image.getMIME());
      return base64.substring(22);
    },
  };
};
