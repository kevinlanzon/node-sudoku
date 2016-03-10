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
  var acc = '';
  for (var row = 0; row < this.numberOfRows(); row++) {
    for ( var col = 0; col < this.numberOfColumns(); col++) {
      var string = ',';
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