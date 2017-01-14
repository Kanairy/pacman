import Grid from './Grid'
import Pacman from './Pacman'
import { COMMANDS } from './constants';

export default class Dialog {
  constructor() {
    this.grid = new Grid();
    this.pacman = new Pacman();
  }

  command(command, ...args) {
    switch (command) {

      case COMMANDS.place:
        if (this.grid.place(args[0], args[1]) && this.pacman.face(args[2])) {
          return true;
        } else {
          return `Ignored invalid PLACE command.`
        }

      case COMMANDS.move:
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

      case COMMANDS.left:
        if (this.grid.getState().placed) {
          this.pacman.turn(COMMANDS.left);
          return true;
        } else {
          return `PLACE Pacman first!`;
        }

      case COMMANDS.right:
        if (this.grid.getState().placed) {
          this.pacman.turn(COMMANDS.right);
          return true;
        } else {
          return `PLACE Pacman first!`;
        }
        
      case COMMANDS.report:
        if (this.grid.getState().placed) {
          const xCoordinate = this.grid.getState().x;
          const yCoordinate = this.grid.getState().y;
          const direction = this.pacman.getState().direction;
          return `${xCoordinate},${yCoordinate},${direction}`;
        } else {
          return `PLACE Pacman first!`;
        }

      default:
        return `Ignored invalid command ${command}.`
    }

  }

}
