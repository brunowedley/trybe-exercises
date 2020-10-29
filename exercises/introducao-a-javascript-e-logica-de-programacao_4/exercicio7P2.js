function verificaFimPalavra(palavra, fimPalavra) {
    word = palavra.split("");
    ending = fimPalavra.split("");
    controle = true;
    for (let index = 0; index < fimPalavra.length; index+=1) {
      if (palavra[palavra.length-fimPalavra.length+index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }
    console.log(verificaFimPalavra("trybe", "be")); //true
    console.log(verificaFimPalavra("joaofernando", "fernan")); //false