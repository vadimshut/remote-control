import robot from 'robotjs';

export const drawCircle = (radius) => {
  robot.setMouseDelay(1);
  const mousePos = robot.getMousePos();

  for (let i = 0; i <= Math.PI * 2; i += 0.01) {
    // Convert polar coordinates to cartesian
    const x = mousePos.x + radius * Math.cos(i);
    const y = mousePos.y + radius * Math.sin(i);

    robot.mouseToggle('down');
    robot.dragMouse(x, y);
  }
};
