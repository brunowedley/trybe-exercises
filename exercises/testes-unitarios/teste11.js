const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let cont = 0;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      cont += 1;
      results.push(cont);
    }
    else {
      results.push(characters[i]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

const expected = removeVowels(parameter);

assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(expected, result);


