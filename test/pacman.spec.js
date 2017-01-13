import { expect } from 'chai';
import Pacman from '../src/Pacman.js'


describe('Pacman', () => {
  let pacman = new Pacman();

  describe('#face', () => {
    it('should have a face command', () => {
      expect(pacman.face()).to.not.be.undefined;
    });

    it('should not accept an invalid direction as an argument', () => {
      expect(pacman.face('BANANA')).to.be.false;
    });

    it('should accept valid direction as an argument', () => {
      expect(pacman.face('NORTH')).to.be.true;
    });

  });
});
