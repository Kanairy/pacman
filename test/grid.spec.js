import { expect } from 'chai';
import Grid from '../src/Grid.js'

describe('Grid', () => {
  let grid = new Grid();

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

  describe('#getState', () => {
    let grid = new Grid();

    it('should report x and y as undefined before placement', () => {
      expect(grid.getState().x).to.be.undefined;
      expect(grid.getState().y).to.be.undefined;
    });
    
    it('should report placed as false before placement', () => {
      expect(grid.getState().placed).to.be.false;
    });
    
    it('should report correct coordinates after valid placement', () => {
      grid.place(1,1);
      expect(grid.getState().x).to.equal(1);
      expect(grid.getState().y).to.equal(1);
    });
    
    it('should report placed as true after valid placement', () => {
      let grid = new Grid();
      grid.place(1,1);
      expect(grid.getState().placed).to.be.true;
    });
    
    it('should report coordinates as undefined after invalid placement', () => {
      let grid = new Grid();
      grid.place(-1,-1);
      expect(grid.getState().x).to.be.undefined;
      expect(grid.getState().y).to.be.undefined;
    });
    
    it('should report placed as false after invalid placement', () => {
      let grid = new Grid();
      grid.place(-1,-1);
      expect(grid.getState().placed).to.be.false;
    });

  });
});
