export default class Grid {
  constructor() {
    this.placed = false;
  }
  place(x, y) {
    if (this.coordinatesValid(x, y)) {
      this.x = x;
      this.y = y;
      this.placed = true;
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
  getPlacementStatus() {
    return this.placed;
  }
  coordinatesValid(x, y) {
    return (x >= 0 && x <= 5 && y >= 0 && y <= 5) ? true : false;
  }
}