function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || "").trim().length;
  return function (max) {
    return function (erro) {
      return function (texto) {
        //   Lazy Evaluation
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

// function aplicarValidacao(fn, valor) {
//   try {
//     fn(valor);
//   } catch (e) {
//     return { error: e };
//   }
// }
function aplicarValidacao(fn) {
  return function (valor) {
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("nome produto inválido");
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
const p2 = { nome: "AB", preco: 14.99, desc: 0.25 };

// console.log(aplicarValidacao(forcarNomeProdutoValido, p1.nome));
// console.log(aplicarValidacao(forcarNomeProdutoValido, p2.nome));
console.log(validarNomeProduto(p1.nome));
console.log(validarNomeProduto(p2.nome));
