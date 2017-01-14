import readline from 'readline';
import Dialog from './Dialog';

const dialog = new Dialog();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'PACMAN || COMMAND> '
});

rl.prompt();

rl.on('line', (line) => {
  // the first token in line will be our command
  const command = line.split(' ')[0];
  // if there is a second token after splitting, split it on the , character
  // otherwise, return empty array
  const args = (line.split(' ')[1]) ? line.split(' ')[1].split(',') : [];
  // spread the args array into the command method
  const output = dialog.command(command, ...args);
  // only allow string messages to be logged
  if (typeof output === 'string') {
    console.log(output);
  }
  rl.prompt();
}).on('close', () => {
  console.log('Bye :)');
  process.exit(0);
});
