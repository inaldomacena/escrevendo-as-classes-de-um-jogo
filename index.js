/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 

 
Bons estudos 😉
*/

class heroes{
    constructor(nome,tipo, idade) {
        this.nome = nome
        this.tipo = tipo
        this.idade = idade
    
        
        
    }



    atacar(){
    let poder;
    

switch(this.tipo){
    case "mago":
        poder = "magia"
        break
    case "guerreiro":
        poder = "espada"
        break
    case "monge":
        poder = "artes marciais"
        break
    case "ninja":
        poder = "shuriken"
        break 
    default:
        poder = "invalido"

    }

          console.log(`O ${this.tipo} atacou usando ${poder}`)

    }

}
   

let heroi1 = new heroes("Merlin","mago", 25,"magia") 
    heroi2 = new heroes("Robin Hood","guerreiro",30)
    heroi3 = new heroes ("Funfun","monge",22)
    heroi4 = new heroes ("Shaulin","ninja",35)
    
   

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()


//console.log(`O ${heroi1.tipo} de nome ${heroi1.nome} e idade ${heroi1.idade} anos atacou usando`)
