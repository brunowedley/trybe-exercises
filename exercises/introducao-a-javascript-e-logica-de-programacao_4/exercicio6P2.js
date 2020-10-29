function numeroI(calculo){
    let total = 0;
    let n = 5;
    for(let index = 0; index <= calculo; index +=1){
        total+=index;
    }
    return total;
}
console.log(numeroI(5));