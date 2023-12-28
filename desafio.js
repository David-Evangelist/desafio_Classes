class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar () {
        let ataque

        switch (this.tipo) {
            case "mago":
                ataque = "magia"
            break;
            case "guerreiro":
                ataque = "espada"
            break;
            case "monge":
                ataque = "artes marciais"
            break;
            case "ninja":
                ataque = "shuriken"
            break;
            default:
                ataque = "ataque indefinido" 
            break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let myHero = new heroi("Lubbock", 23, "ninja")
myHero.atacar()