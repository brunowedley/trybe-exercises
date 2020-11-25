const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => {
  obj[key] = value;
};

addKey(lesson2, 'turno', 'manhã')

const keyList = (obj) => {
  objList = Object.keys(obj);
  return objList;
}

const objLength = (obj) => {
  const size = Object.keys(obj).length;
  return size;
}

const objValue = (obj) => {
  const ObjectValue = Object.values(obj);
  return ObjectValue;
}

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const studentNumber = (obj) => {
  let total = 0;
  const number = Object.keys(obj);
  for (key in number) {
    total += obj[number[key]].numeroEstudantes;
  }
  return total;
}

const getValueByNumber = (obj, number) => Object.values(obj)[number];

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
};
console.log(verifyPair(lesson2, 'professor', 'Carlos'));




