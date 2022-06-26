import robot from 'robotjs';

export const drawSquare = (x: number, y: number, length: number) => {
  robot.setMouseDelay(1);

  robot.mouseToggle('down');
  robot.moveMouseSmooth(x, y - length);
  robot.moveMouseSmooth(x + length, y - length);
  robot.moveMouseSmooth(x + length, y);
  robot.moveMouseSmooth(x, y);
  robot.mouseToggle('up');
};
