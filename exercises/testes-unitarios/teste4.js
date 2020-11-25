const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

const expected = myFizzBuzz('10');

//assert.deepStrictEqual(expected, 'fizzbuzz');
// assert.deepStrictEqual(expected, 'fizz');
//assert.deepStrictEqual(expected, 'buzz');
assert.deepStrictEqual(expected, 'fizzbuzz');
