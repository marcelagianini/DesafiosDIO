class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataque = this._obterAtaque();
        const mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        return mensagem;
    }

    _obterAtaque() {
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque desconhecido";
        }
    }
}

const nomeHeroi = prompt("Digite o nome do herói:");
const idadeHeroi = parseInt(prompt("Digite a idade do herói:"));
const tipoHeroi = prompt("Digite o tipo do herói (guerreiro, mago, monge, ninja):");

const heroiUsuario = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

const mensagemAtaque = heroiUsuario.atacar();
console.log(mensagemAtaque);
document.write(mensagemAtaque)