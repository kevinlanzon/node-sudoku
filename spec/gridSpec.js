var Grid = require('../js/grid');

describe('Grid', function() {

  var grid = new Grid();

  it('should have 9 columns', function() {
    expect(grid.numberOfColumns()).toEqual(9);
  });

  it('should have 9 rows', function() {
    expect(grid.numberOfRows()).toEqual(9);
  });

 xit('should be able to print the grid with blank spaces', function(){
    var actual = grid.print();
    var expected = '0,9,0,0,0,0,0,0,6,\n' +
                   '0,0,0,9,6,0,4,8,5,\n' +
                   '0,0,0,5,8,1,0,0,0,\n' +
                   '0,0,4,0,0,0,0,0,0,\n' +
                   '5,1,7,2,0,0,9,0,0,\n' +
                   '6,0,2,0,0,0,3,7,0,\n' +
                   '1,0,0,8,0,4,0,2,0,\n' +
                   '7,0,6,0,0,0,8,1,0,\n' +
                   '3,0,0,0,9,0,0,0,0,';
    expect(actual).toEqual(expected);
  });

  it('should return the number 5 for position 0,1', function() {
    expect(grid.position(0, 1)).toEqual(9);
  });

  it('should return the number 2 for position 0,8', function() {
    expect(grid.position(0, 8)).toEqual(6);
  });

  it('should return an empty cell for position 0,0', function() {
    expect(grid.position(0, 0)).toEqual(0);
  });

  it('should throw an error for position 0,9', function() {
    expect(function() {
      grid.position(0,9);
    }).toThrow(Error('Cell does not exist'));
  });

  it('should throw an error for position 0,-1', function() {
    expect(function() {
      grid.position(0,-1);
    }).toThrow(Error('Cell does not exist'));
  });

  it('should return an empty cell for position 8,8', function() {
    expect(grid.position(8,8)).toEqual(0);
  });

  it('should throw an error for position 9,0', function() {
    expect(function() {
      grid.position(9,0);
    }).toThrow(Error('Cell does not exist'));
  });

  it('should throw an error for position -1,0', function() {
    expect(function() {
      grid.position(-1,0);
    }).toThrow(Error('Cell does not exist'));
  });
});