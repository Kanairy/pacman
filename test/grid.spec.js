import { expect } from 'chai';
import Grid from '../src/Grid.js'

describe('Grid', () => {
  const grid = new Grid();

  describe('#place', () => {
    it('should have a place command', () => {
      expect(grid.place()).to.not.be.undefined;
    });

    it('should allow placement at valid coordinates', () => {
      expect(grid.place(0,0)).to.be.true;
    });

    it('should not allow negative coordinates', () => {
      expect(grid.place(-1,-1)).to.be.false;
    });
    

    it('should not allow x coordinate above 5', () => {
      expect(grid.place(6,1)).to.be.false;
    });

    it('should not allow y coordinate above 5', () => {
      expect(grid.place(1,6)).to.be.false;
    });

  });
});
