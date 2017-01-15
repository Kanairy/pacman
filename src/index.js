import readline from 'readline';
import Dialog from './Dialog';

const dialog = new Dialog();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PAC-COMMAND> '
});

export const processLine = (line) => {
  // the first token in line will be our command
  const command = line.split(' ')[0];
  // if there is a second token after splitting, split it on the ',' character
  // to form our arguments. Otherwise, return empty array
  const args = (line.split(' ')[1]) ? line.split(' ')[1].split(',') : [];
  return {command, args};
}

rl.prompt();

rl.on('line', (line) => {
  const { command, args } = processLine(line);
  // spread the args array into the command method
  const output = dialog.command(command, ...args);
  // only allow string messages to be logged
  if (typeof output === 'string') {
    console.log(output);
  }
  rl.prompt();
  
}).on('close', () => {
  console.log('Thanks for playing :)');
  process.exit(0);
});
