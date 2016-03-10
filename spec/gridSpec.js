var Grid = require('../js/grid');

describe('Grid', function() {

  var grid = new Grid();

  it('should have 9 columns', function() {
    expect(grid.numberOfColumns()).toEqual(9);
  });

  it('should have 9 rows', function() {
    expect(grid.numberOfRows()).toEqual(9);
  });

  it('should be able to print the grid with blank spaces', function() {
    var actual = grid.print();
    var expected = ' , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n , , , , , , , , ,\n';
    expect(actual).toEqual(expected);
  });
});