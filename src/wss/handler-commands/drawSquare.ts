import robot from 'robotjs';

export const drawSquare= (length: number) => {
    robot.setMouseDelay(1);
    const {x, y} = robot.getMousePos();
    robot.mouseToggle('down');
    robot.moveMouseSmooth(x, y-length);
    robot.moveMouseSmooth(x+length, y-length);
    robot.moveMouseSmooth(x+length, y);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
}