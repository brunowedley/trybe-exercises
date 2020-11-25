const assert = require('assert');
const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greet;
  let output = [];
  for (let person = 0; person < people.length; person += 1) {
    greet = greeting + people[person];
    output.push(greet);
  }
  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const expected = greetPeople(parameter);

assert.strictEqual(typeof greetPeople, 'function')
assert.deepStrictEqual(expected, result);