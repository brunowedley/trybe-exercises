
const assert = require('assert');
const { setupMaster } = require('cluster');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((result, name) => {
    return result + name.split('').reduce((resultSplit, char) => {
      if (char === 'a' || char === 'A') {
        return resultSplit + 1;
      }
      return resultSplit;
    }, 0)
  }, 0);
}

assert.deepEqual(containsA(), 20);