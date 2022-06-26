import { setMouseDelay, mouseToggle, moveMouseSmooth } from 'robotjs';

export const drawSquare = (x: number, y: number, length: number) => {
  setMouseDelay(1);
  mouseToggle('down');
  moveMouseSmooth(x, y - length);
  moveMouseSmooth(x + length, y - length);
  moveMouseSmooth(x + length, y);
  moveMouseSmooth(x, y);
  mouseToggle('up');
};
