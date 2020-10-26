let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arit = 0;
let number = 0;
let bigNumber = 0;
let smallNumber = 100;
let impar = 0;

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
    number = numbers[numbers.length-1]; // exercício 4
}
    if(number > 20){
        console.log ("valor maior que 20");
    } else {
        console.log("valor menor que 20");
    }

for(let index = 0; numbers.length > index; index += 1){
    if (numbers[index] > bigNumber){ // exercício 5
        bigNumber = numbers[index];
    } else {
        bigNumber = bigNumber;
    }
}
    console.log ("o maior número é "+ bigNumber);

for(let index = 0; numbers.length > index; index += 1){
    if (numbers[index] % 2 != 0){ // exercicio 6
        impar += 1;
    } else {
        impar = impar;
    }
}
    if (impar != 0){
        console.log ("existem "+impar+" números impares")
    } else {
        console.log ("não existem numeros impares");
    }

for(let index = 0; numbers.length > index; index += 1){
    if (numbers[index] < smallNumber){ // exercício 7
        smallNumber = numbers[index];
    } else {
        smallNumber = smallNumber;
    }
}
        console.log ("o menor número é "+ smallNumber);