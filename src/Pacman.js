const validDirections = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

export default class Pacman {

  face(direction) {
    if (validDirections.includes(direction)) {
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

    if (validDirections[validDirections.indexOf(this.direction) + offset]) {
      this.direction = validDirections[validDirections.indexOf(this.direction) + offset];
    } else {
      this.direction = (offset === -1) ? validDirections[validDirections.length -1] : validDirections[0];
    }
    
    return this.direction;
  }

  getState() {
    return {
      direction: this.direction
    }
  }
}