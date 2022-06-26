import robot from 'robotjs';

interface IDirections  {
    up: [number, number];
    down: [number, number];
    left: [number, number];
    right: [number, number];
}

export const moove = (x:number, y: number, direction: 'up' | 'down' | 'left' | 'right', step: number) => {
  robot.setMouseDelay(1);

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
