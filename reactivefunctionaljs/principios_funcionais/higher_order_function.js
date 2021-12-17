//  Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as
//  são chamadas de higher order function

function executar(fn, ...params) {
  //   return fn(...params);
  return function (textoInicial) {
    return `${textoInicial}: ${fn(...params)} ?!`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

function multi(a, b) {
  return a * b;
}

const r1 = executar(somar, 3, 4, 5)("O resultado da soma é");
const r2 = executar(multi, 3, 4)("\nO resultado da multiplicação é");

console.log(r1, r2);
