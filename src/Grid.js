export default class Grid {
  place(x, y) {
    if (this.coordinatesValid(x, y)) {
      this.x = x;
      this.y = y;
      return true;
    }
    return false;
  }
  getState() {
    return {
      x: this.x,
      y: this.y
    };
  }
  coordinatesValid(x, y) {
    return (x >= 0 && x <= 5 && y >= 0 && y <= 5) ? true: false;
  }
}