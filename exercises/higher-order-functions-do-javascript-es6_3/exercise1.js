
const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
  return arrays.reduce((Accumulator, currentValue) => Accumulator.concat(currentValue), []);
  // escreva seu código aqui
}
console.log(flatten(arrays))

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);