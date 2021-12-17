// diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outra varável.

const x = 3;

const y = function (txt) {
  return `esse é o texto => ${txt}`;
};

const z = () => console.log("ZZZZzzzZZZzzz");

console.log(x);
console.log(y("Eaaerr meu chapa"));
z();
