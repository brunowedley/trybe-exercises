function contagemNomes(nomes){
    let contagemNomes  = nomes[0];
    for (let key in nomes){
        if(contagemNomes.length < nomes[key].length){
            contagemNomes = nomes[key]
        }
    }
    return contagemNomes;
}
console.log(contagemNomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));