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

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("nome produto inválido");

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
forcarNomeProdutoValido(p1.nome);
