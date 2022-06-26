import { setMouseDelay, mouseToggle, dragMouse, moveMouse } from 'robotjs';

export const drawCircle = (x: number, y: number, radius: number) => {
  setMouseDelay(1);

  moveMouse(x + radius, y);
  mouseToggle('down');
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const newX = x + radius * Math.cos(i);
    const newY = y + radius * Math.sin(i);
    dragMouse(newX, newY);
  }
  mouseToggle('up');
};
