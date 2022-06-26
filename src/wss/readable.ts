import { Duplex } from 'stream';
import { validateCommand } from '../utils/validateCommand';
import { router } from './router';

export default function readable(duplex: Duplex) {
  let data = '';

  return async () => {
    try {
      let chunk;
      while ((chunk = duplex.read()) !== null) data += chunk;

      const [command, ...params] = data.split(' ');
      const [x, y] = params.map(Number);
      const routes = router();
      const isValidated = validateCommand(routes, command);
      if (!isValidated) throw new Error(`${command} - command not found`);
      console.log(`Recieved: ${command},`, ...params);
      if (command) {
        const result = await routes[command](x, y);

        duplex.write(`${command} ${result} \0`);
        command === 'mouse_position'
          ? console.log(`Result: ${command}`, result, 'successfuly\n')
          : console.log(`Result: ${command}`, ...params, 'successfuly\n');
      }
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    } finally {
      data = '';
    }
  };
}
