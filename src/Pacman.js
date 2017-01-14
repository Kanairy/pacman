import { DIRECTIONS } from './constants';

export default class Pacman {

  face(direction) {
    if (DIRECTIONS.includes(direction)) {
      this.direction = direction;
      return true;
    }
    return false;
  }

  turn(direction) {

    if (!this.direction) {
      return false;
    }

    var offset = (direction === 'LEFT') ? -1 : 1;

    if (DIRECTIONS[DIRECTIONS.indexOf(this.direction) + offset]) {
      this.direction = DIRECTIONS[DIRECTIONS.indexOf(this.direction) + offset];
    } else {
      // if offset is to the left, pick direction at previous index or loop back to the first element
      this.direction = (offset === -1) ? DIRECTIONS[DIRECTIONS.length -1] : DIRECTIONS[0];
    }
    
    return this.direction;
  }

  step() {
    if (this.direction === 'NORTH') {
      return {x: 0, y: 1};
    }
    if (this.direction === 'SOUTH') {
      return {x: 0, y: -1};
    }
    if (this.direction === 'EAST') {
      return {x: 1, y: 0};
    }
    if (this.direction === 'WEST') {
      return {x: -1, y: 0};
    }
  }

  getState() {
    return {
      direction: this.direction
    }
  }
}
