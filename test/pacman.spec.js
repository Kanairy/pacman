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

    it('should accept a valid direction as an argument', () => {
      expect(pacman.face('NORTH')).to.be.true;
    });

  });

  describe('#turn', () => {

    beforeEach(() => {
      let pacman = new Pacman();
    });

    it('should have a turn command', () => {
      expect(pacman.turn()).to.not.be.undefined;
    });

    it('should be facing west after turning left', () => {
      pacman.face('NORTH');
      expect(pacman.turn('LEFT')).to.equal('WEST');
    });

    it('should be facing east after turning right', () => {
      pacman.face('NORTH');
      expect(pacman.turn('RIGHT')).to.equal('EAST');
    });

    it('should be facing east after turning right', () => {
      pacman.face('EAST');
      expect(pacman.turn('RIGHT')).to.equal('SOUTH');
    });

  });
});
