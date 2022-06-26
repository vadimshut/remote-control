import { config } from 'dotenv';
import { ALTERNATIVE_WSS_PORT, ALTERNATIVE_HTTP_PORT } from './constants';

export const getPort = (subject: 'wss' | 'http') => {
  let port;
  config();

  switch (subject) {
    case 'wss':
      port = Number(process.env['WSS_PORT']) || ALTERNATIVE_WSS_PORT;
      break;
    case 'http':
      port = Number(process.env['HTTP_PORT']) || ALTERNATIVE_HTTP_PORT;
      break;
    default: {
      port = 1111;
    }
  }

  return port;
};
