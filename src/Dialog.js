import Grid from './Grid'
import Pacman from './Pacman'

export default class Dialog {
  constructor() {
    this.grid = new Grid();
    this.pacman = new Pacman();
  }

  command(command, ...args) {
    const validCommands = ['MOVE', 'PLACE', 'REPORT', 'TURN'];

    switch (command) {
      case 'PLACE':
        if (this.grid.place(args[0], args[1]) && this.pacman.face(args[2])) {
          return true;
        } else {
          return `Ignored invalid PLACE command.`
        }
      case 'MOVE':
        if (this.grid.getState().placed) {
          const vector = this.pacman.step();
          const newXPosition = Number(vector.x) + Number(this.grid.getState().x);
          const newYPosition = Number(vector.y) + Number(this.grid.getState().y);

          if (this.grid.place(newXPosition, newYPosition)) {
            return true;
          } else {
            return `Ignoring invalid MOVE command`;
          }

        } else {
          return `PLACE Pacman first!`;
        }

      case 'LEFT':
        if (this.grid.getState().placed) {
          this.pacman.turn('LEFT');
          return true;
        } else {
          return `PLACE Pacman first!`;
        }

      case 'RIGHT':
        if (this.grid.getState().placed) {
          this.pacman.turn('RIGHT');
          return true;
        } else {
          return `PLACE Pacman first!`;
        }
        
      case 'REPORT':
        if (this.grid.getState().placed) {
          return `${this.grid.getState().x},${this.grid.getState().y},${this.pacman.getState().direction}`;
        } else {
          return `PLACE Pacman first!`;
        }

      default:
        return `Ignored invalid command ${command}.`
    }

  }


}