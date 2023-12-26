var nomeHeroi = prompt("Digite o nome do herói:");
var nivelXp = Number(prompt("Digite o nível de experiência do herói:"));
var classificacao;

switch (true) {
    case nivelXp < 1000:
        classificacao = "Ferro";
        console.log("Ferro");
        break;

    case nivelXp >= 1001 && nivelXp <= 2000:
        classificacao = "Bronze";
        console.log("Bronze");
        break;

    case nivelXp >= 2001 && nivelXp <= 5000:
        classificacao = "Prata";
        console.log("Prata");
        break;

    case nivelXp >= 5001 && nivelXp <= 7000:
        classificacao = "Ouro";
        console.log("Ouro");
        break;

    default:
        classificacao = "Outro :-)";
        console.log("Outro nível :-)");
        break;
}
console.log("O Herói " + nomeHeroi + " está no nível de " + classificacao)
document.write("O Herói " + nomeHeroi + " está no nível de " + classificacao);
