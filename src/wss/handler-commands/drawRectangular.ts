import robot from 'robotjs';
export const drawRectangular = (width: number, height:number) => {
    robot.setMouseDelay(1);
    const {x, y} = robot.getMousePos();
    robot.mouseToggle('down');
    robot.moveMouseSmooth(x, y-height);
    robot.moveMouseSmooth(x+width, y-height);
    robot.moveMouseSmooth(x+width, y);
    robot.moveMouseSmooth(x, y);
    robot.mouseToggle('up');
}
