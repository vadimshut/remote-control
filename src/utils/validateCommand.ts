import { IRouter } from '../interfaces/IRouter';

export const validateCommand = (obj: IRouter, command: string | undefined) => {
  if (!command) return false;
  return obj.hasOwnProperty(command);
};
