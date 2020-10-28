
// primeiro exercício
let n = 5;
let space = "";
let ast = "*";

for (let linha = 0; linha < n; linha +=1) {
    space += ast;
}
for (let coluna = 0; coluna < n; coluna +=1) {
    console.log(space);
}
console.log();
    
//segundo exercício

space = "";
for (let linha = 0; linha < n; linha +=1) {
    space += ast;
    console.log(space);
}