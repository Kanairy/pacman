import { expect } from 'chai';
import Dialog from '../src/Dialog.js'

describe('Dialog', () => {

  describe('#command PLACE', () => {
    let dialog = new Dialog();

    it('should have a "command" command', () => {
      expect(dialog.command()).to.not.be.undefined;
    });

    it('should accept valid PLACE command', () => {
      expect(dialog.command('PLACE', 0, 0, 'NORTH')).to.be.true;
    });

    it('should reject invalid PLACE command', () => {
      const expectedMessage = `Ignored invalid PLACE command.`
      expect(dialog.command('PLACE', 12, -1, 'BANANA')).to.equal(expectedMessage);
    });

    it('should accept valid PLACE command with additional arguments', () => {
      expect(dialog.command('PLACE', 0, 0, 'NORTH', 'SOME', 'EXTRA', 'STUFF')).to.be.true;
    });

  });

  describe('#command MOVE', () => {
    let dialog = new Dialog();

    it('should reject a MOVE command until pacman is placed', () => {
      const expectedMessage = `PLACE Pacman first!`;
      expect(dialog.command('MOVE')).to.equal(expectedMessage)
    });

    it('should accept a MOVE command if Pacman is PLACE d.', () => {
      dialog.command('PLACE', 0, 0, 'NORTH');
      expect(dialog.command('MOVE')).to.be.true;
    });

    it('should ignore any additional provided arugments', () => {
      dialog.command('PLACE', 0, 0, 'NORTH');
      expect(dialog.command('MOVE', 'EXTRA')).to.be.true;
    });

    it('should reject a MOVE command that would cause Pacman to fall of the grid', () => {
      dialog.command('PLACE', 5, 5, 'NORTH');
      const expectedMessage = `Ignoring invalid MOVE command`;
      expect(dialog.command('MOVE')).to.equal(expectedMessage);
    });
  });

  describe('#command LEFT', () => {
    let dialog = new Dialog();

    it('should reject a LEFT command until Pacman is PLACE d', () => {
      const expectedMessage = `PLACE Pacman first!`;
      expect(dialog.command('LEFT')).to.equal(expectedMessage);
    });

    it('should accept a LEFT command after Pacman has been PLACE d', () => {
      dialog.command('PLACE', 0, 0, 'NORTH');
      expect(dialog.command('LEFT')).to.be.true;
    });

  });
});
