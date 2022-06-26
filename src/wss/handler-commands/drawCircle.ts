import robot from 'robotjs';

export const drawCircle = (x:number, y:number, radius: number) => {
  robot.setMouseDelay(1);
  
  robot.mouseToggle('down');
  
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const newX = x + radius * Math.cos(i);
    const newY = y + radius * Math.sin(i);
    robot.dragMouse(newX, newY);
  }
  robot.mouseToggle('up');
};
