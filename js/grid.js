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
  for (var i = 0; i < this.numberOfRows(); i++) {
    for (var j = 0; j < this.numberOfColumns(); j++) {
      var string = ' ,';
      acc = acc.concat(string);
    }
    acc = acc.concat('\n');
  }
  return acc;
};

Grid.prototype.position = function(row, col) {
  if (this.numberOfColumns() <= col || col < 0) {
    throw new Error('Cell does not exist');
  }
  return this.cells[row][col];
};

module.exports = Grid;