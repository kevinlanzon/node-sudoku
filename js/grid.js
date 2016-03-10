function Grid() {

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

module.exports = Grid;