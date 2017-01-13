import { expect } from 'chai';
import Grid from '../src/Grid.js'

describe('Grid', () => {
  const grid = new Grid();

  describe('#place', () => {
    it('should have a place command', () => {
      expect(grid.place()).to.be.truthy;
    })
    it('should allow placement at valid coordinates', () => {
      expect(grid.place(0,0)).to.be.truthy;
    })
  })
});
