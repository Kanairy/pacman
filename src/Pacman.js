const validDirections = ['NORTH', 'SOUTH', 'EAST', 'WEST'];

export default class Pacman {
  face(direction) {
    if (validDirections.includes(direction)) {
      this.direction = direction;
      return true;
    }
    return false;
  }
  getState() {
    return {
      direction: this.direction
    }
  }
}