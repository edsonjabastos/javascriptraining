function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!!!`;
}

function tornarLento(texto) {
  return texto.split("").join(" ");
}

const exagerado = composicao(gritar, enfatizar, tornarLento)("para");
const umPoucoMenosExagerado = composicao(
  gritar,
  enfatizar
)("cuidado com o sapo");

console.log(exagerado);
console.log(umPoucoMenosExagerado);
