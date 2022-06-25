import robot from 'robotjs';

export const drawCircle = (radius: number) => {
  robot.setMouseDelay(1);
  
  robot.mouseToggle('down');
  const mousePos = robot.getMousePos();
  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    const x = mousePos.x + radius * Math.cos(i);
    const y = mousePos.y + radius * Math.sin(i);
    robot.dragMouse(x, y);
  }
  robot.mouseToggle('up');
};
