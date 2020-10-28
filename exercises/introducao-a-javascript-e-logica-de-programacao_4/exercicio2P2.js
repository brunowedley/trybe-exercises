function maiorNumero(numeros) {
    let maior = 0;
    for (let key in numeros) {
      if (numeros[maior] < numeros[key]) {
        maior = key;
      }
    }
    return maior;
  }
  
  console.log(maiorNumero([8, 9, 1, 3, 12, 5, 22, 4]));