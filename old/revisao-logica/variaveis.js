// var, let, const
//var -> ES5 cross-browser
// let e const > ES2015
var teste0 = "minha string"; //var permite criar um variavel com mesmo nome
var teste0 = 00; //e atribuir novo valor
console.log(teste0);
let teste = "minha string"; //let não permite criar uma variavel com mesmo nome
teste = 01; //mas permite reatribuir um novo valor a uma variavel existente
console.log(teste); //let pode receber o valor (novo) depois
const teste1 = "minha string"; //const é uzado quando se cria um valor que não pode se modificar no futuro
//teste1  = 02; //const tem a obrigação de rebecer um dado na criação
console.log(teste1);