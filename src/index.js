
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined') {
    return [];
  }
  const result = [];
  matrix.forEach((element, index) => {
    if (index % 2 === 0) {
      element.forEach(item => {
        result.push(item);
      })
    } else {
      const reversedElement = element.reverse()
      reversedElement.forEach (value => {
        result.push(value);
      })
    }
  });

  return result;

}
