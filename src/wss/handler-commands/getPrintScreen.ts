import robot from 'robotjs';
import Jimp from 'jimp';

export const getPrintScreen = (x: number, y: number, width: number, height: number): Promise<Jimp> => {
  return new Promise((resolve) => {
    const screen = robot.screen.capture(x, y, width, height);
    const image = new Jimp(screen.width, screen.height);
    let position = 0;
    image.scanQuiet(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      image.bitmap.data[idx + 2] = screen.image.readUInt8(position++);
      image.bitmap.data[idx + 1] = screen.image.readUInt8(position++);
      image.bitmap.data[idx + 0] = screen.image.readUInt8(position++);
      image.bitmap.data[idx + 3] = screen.image.readUInt8(position++);
    });
    resolve(image);
  });
};
