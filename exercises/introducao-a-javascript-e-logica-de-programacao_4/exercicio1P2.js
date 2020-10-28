
function verificaPalindrome(palavra) {
    let word = palavra.split("");
    let isPalindrome = true;
    for (let index in word) {
        if (word[index] != palavra[(palavra.length - 1) - index]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

function verificaPalindrome(string) {
    let drow = string.split("").reverse().join("");
    if (drow === string) {
        return "é palindromo";
    } else {
        return "não é palindromo";
    }
}

console.log("a palavra " + verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false
