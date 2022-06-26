import { setMouseDelay, mouseToggle, moveMouseSmooth } from 'robotjs';
export const drawRectangular = (x: number, y: number, width: number, height: number) => {
  setMouseDelay(1);

  mouseToggle('down');
  moveMouseSmooth(x, y - height);
  moveMouseSmooth(x + width, y - height);
  moveMouseSmooth(x + width, y);
  moveMouseSmooth(x, y);
  mouseToggle('up');
};
