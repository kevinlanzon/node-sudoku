function Grid() {
  this.cells = [[0,9,0,0,0,0,0,0,6],
                [0,0,0,9,6,0,4,8,5],
                [0,0,0,5,8,1,0,0,0],
                [0,0,4,0,0,0,0,0,0],
                [5,1,7,2,0,0,9,0,0],
                [6,0,2,0,0,0,3,7,0],
                [1,0,0,8,0,4,0,2,0],
                [7,0,6,0,0,0,8,1,0],
                [3,0,0,0,9,0,0,0,0]];
}

Grid.prototype.numberOfColumns = function() {
  return 9;
};

Grid.prototype.numberOfRows = function() {
  return 9;
};

Grid.prototype.print = function() {
  var acc = '',
      row,
      col,
      string;

  for (row = 0; row < this.numberOfRows(); row++) {
    for (col = 0; col < this.numberOfColumns(); col++) {
      string = ',';
      acc = acc.concat(this.position(row, col), string);
    }
    acc = acc.concat('\n');
  }
  return acc;
};

Grid.prototype.position = function(row, col) {
  if (this.numberOfColumns() <= col || col < 0 || this.numberOfRows() <= row || row < 0) {
    throw new Error('Cell does not exist');
  }
  return this.cells[row][col];
};

module.exports = Grid;