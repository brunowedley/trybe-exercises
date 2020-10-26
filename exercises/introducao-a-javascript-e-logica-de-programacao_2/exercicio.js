let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arit = 0;
for(let index = 0; numbers.length > index; index += 1){
    console.log(numbers[index]); //exercício 1
}

for(let index = 0; numbers.length > index; index += 1){
    sum += numbers[index]; //exercício 2
}
    console.log("a soma é "+sum);

for(let index = 0; numbers.length > index; index += 1){
    arit = (sum/numbers.length) //exercício 3
}
    console.log("a média é " + arit);    

for(let index = 0; numbers.length > index; index += 1){
    arit = (sum/numbers.length) //exercício 4
}
    console.log("a média é " + arit);