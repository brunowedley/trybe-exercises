function menor(numeros){
  let menorN = 0;
  for (let index = 0; index < numeros.length; index +=1){
    if(numeros[menorN] > numeros[index]){
      menorN = index;
    }
  }
  return menorN;
}
console.log(menor([8, 9, 1, 22, 12, 5, 3, 4]));