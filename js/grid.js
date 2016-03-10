function Grid() {
  this.cells = [' ',5,' ',' ',' ',' ',' ',' ', ];
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
  return this.cells[col];
};

module.exports = Grid;