function Grid() {
  this.cells = [[' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',2],
                [' ',5,' ',' ',' ',' ',' ',' ',' ']];
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