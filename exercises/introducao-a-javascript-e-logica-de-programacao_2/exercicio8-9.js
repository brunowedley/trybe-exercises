let newArray = [];
let division = 0;
for (let index = 1; index < 26; index += 1){
    newArray.push(index); //exercício 8
}
    console.log (newArray);

for (let index = 0; newArray.length > index ; index += 1){
    division = newArray[index]/2;
    console.log (division);
}