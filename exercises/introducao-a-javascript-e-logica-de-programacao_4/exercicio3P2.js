function indiceDoMenor(numeros) {
    let menor = 0;
    for (let key in numeros) {
      if (numeros[menor] > numeros[key]) {
        menor = key;
      }
    }
    return menor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6