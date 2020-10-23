let pecaXadrez = "Cavalo";

switch (pecaXadrez.toLowerCase()){

    case "cavalo":
        console.log("A peça se movimenta em L");
        break;
    case "peão":
        console.log("Uma casa pra frente");
        break;
    case "bispo":
        console.log("Diagonais");
        break;
    case "torre":
        console.log("Frente, trás, direita e esquerda");
        break;
    case "rei":
        console.log("uma casa para todos os lados");
        break;
    case "rainha":
        console.log("todos os lados e diagonais");
        break;
    default:
        console.log("ERRO! Peça não encontrada!");
}