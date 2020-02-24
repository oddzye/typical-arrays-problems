
exports.min = function min (array) {
  return arguments.length && array.length ? array.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max (array) {
    return arguments.length && array.length ? array.sort((a, b) => a - b)[array.length - 1] : 0;
}

exports.avg = function avg (array) {
  return arguments.length && array.length ? array.reduce((acc, number) => acc + number, 0)/array.length : 0;
}
