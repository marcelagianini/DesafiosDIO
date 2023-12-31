function calcularClassificacao(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    if (saldo <= 10) {
        return "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else if(saldo >= 101) {
        return "Imortal";
    }
    else(
        print("Elo não disponível")
    )
}

var vitorias = parseInt(prompt("Insira o seu número de vitórias:"));
var derrotas = parseInt(prompt("Insira o seu número de derrotas:"));
var nome = prompt("Insira o seu nick:");

var classificacao = calcularClassificacao(vitorias, derrotas);

console.log("O Herói " + nome + " tem um saldo de " + (vitorias - derrotas) + " e está no nível de " + classificacao);
document.write("O Herói " + nome + " tem um saldo de " + (vitorias - derrotas) + " e está no nível de " + classificacao);
