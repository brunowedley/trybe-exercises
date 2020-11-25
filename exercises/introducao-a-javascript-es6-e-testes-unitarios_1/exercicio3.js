const fatorial = number => {
  let fator = 1;
  for (let index = 2; index <= number; index = +1) {
    fator *= index;
  }
  return fator;
}
console.log(fatorial(5));