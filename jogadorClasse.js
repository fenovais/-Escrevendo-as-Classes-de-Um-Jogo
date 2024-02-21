//Aqui criei uma classe  com os seus devidos parametros e propriedades como: nome,idade e classe
class heroPlayer{
    constructor(namePLayer,agePlayer,typeClass){
        this.namePLayer = namePLayer;
        this.agePlayer = agePlayer;
        this.typeClass = typeClass;
    }
   //Definindo um método como ataque,que exibe a mensagem de acordo com o herói escolhido usando uma switch-case
    toAttack(){
        let attack= "";
        switch (this.typeClass
            ) {
            case "mago":
                attack= "usou magia";
                break;
            case "guerreiro":
                attack = "usou espada";
                break;
            case "monge":
                attack = "usou artes marciais";
                break;
            case "ninja":
                attack = "usou shuriken";
                break;
            default:
                attack = "atacou";
                break;
                 }
                 console.log(`O ${this.typeClass} atacou usando ${attack}`);            
   } 
}
//Estou utilizando variáveis para retornar valores e ver se realmente o código funciounou.
let heroi1 = new heroPlayer("Gerald", 2000, "mago");
heroi1.toAttack();

let heroi2 = new heroPlayer("Arthur", 35, "guerreiro");
heroi2.toAttack();

let heroi3 = new heroPlayer("Chin Yang", 33, "monge");
heroi3.toAttack();

let heroi4 = new heroPlayer("Hanzo", 45, "ninja");
heroi4.toAttack();

