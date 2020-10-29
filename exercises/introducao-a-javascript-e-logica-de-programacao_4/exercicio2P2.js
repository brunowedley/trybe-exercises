  function maior(numeros){
    let maiorN = 0;
    for (let index = 0; index < numeros.length; index +=1){
      if(numeros[maiorN] < numeros[index]){
        maiorN = index;
      }
    }
    return maiorN;
  }
  console.log(maior([8, 9, 1, 22, 12, 5, 3, 4]));