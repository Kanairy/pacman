import { expect } from 'chai';
import { processLine } from '../src/index';
import Dialog from '../src/Dialog';

describe('processLine', () => {
  it('should separate provided string to command and args', () => {
    const expectedResult = { command: 'PLACE', args: [ '0', '0', 'NORTH' ] };
    expect(processLine('PLACE 0,0,NORTH')).to.deep.equal(expectedResult);
  });

  it('should return args with an empty array if no args provided', () => {
    const expectedResult = { command: 'MOVE', args: [] };
    expect(processLine('MOVE')).to.deep.equal(expectedResult);
  });

  it('should ignore whitespaces after command is provided', () => {
    const expectedResult = { command: 'MOVE', args: [] };
    expect(processLine('MOVE  ')).to.deep.equal(expectedResult);
  });

  it('should ignore args if more than one space provided between tokens', () => {
    const expectedResult = { command: 'MOVE', args: [] };
    expect(processLine('MOVE   0,0,NORTH')).to.deep.equal(expectedResult);
  });

});

describe('integration', () => {

  it('should return true after valid place command', () => {
    const dialog = new Dialog();
    expect(dialog.command(processLine('PLACE 1,2,EAST').command, ...processLine('PLACE 1,2,EAST').args)).to.be.true;
  });

  it('should correctly report position after placement', () => {
    const dialog = new Dialog();
    expect(dialog.command(processLine('PLACE 1,2,EAST').command, ...processLine('PLACE 1,2,EAST').args)).to.be.true;
    expect(dialog.command(processLine('REPORT').command, ...processLine('REPORT').args)).to.equal('1,2,EAST');
  });

  it('should correctly report position after MOVE command', () => {
    const dialog = new Dialog();
    expect(dialog.command(processLine('PLACE 1,2,EAST').command, ...processLine('PLACE 1,2,EAST').args)).to.be.true;
    expect(dialog.command(processLine('REPORT').command, ...processLine('REPORT').args)).to.equal('1,2,EAST');
    expect(dialog.command(processLine('MOVE').command, ...processLine('MOVE').args)).to.be.true;
    expect(dialog.command(processLine('REPORT').command, ...processLine('REPORT').args)).to.equal('2,2,EAST');
  });

  it('should reject command to move off grid edge', () => {
    const dialog = new Dialog();
    expect(dialog.command(processLine('PLACE 5,5,NORTH').command, ...processLine('PLACE 5,5,NORTH').args)).to.be.true;
    expect(dialog.command(processLine('MOVE').command, ...processLine('MOVE').args)).to.equal('Ignoring invalid MOVE command');
  });

});