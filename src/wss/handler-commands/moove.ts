import robot from 'robotjs';

interface IDirections  {
    up: [number, number];
    down: [number, number];
    left: [number, number];
    right: [number, number];
}

export const moove = (direction: 'up' | 'down' | 'left' | 'right', step: number) => {
  console.log(direction, step);

  robot.setMouseDelay(1);
  const { x, y } = robot.getMousePos();
  const directions: IDirections = {
    up: [x,y-step],
    down: [x, y + step],
    left: [x - step, y],
    right: [x + step, y],
  };

  if(direction in directions) {
    const [x2, y2] = directions[direction]
    robot.moveMouseSmooth(x2, y2)
  }
  
};
