const pessoa = Object.freeze({
  nome: "Maria",
  altura: 1.8,
  cidade: "Belo Horizonte",
  end: Object.freeze({
    rua: "Feliz",
  }),
});

// Atribuição por referência
const outraPessoa = pessoa;

// Passagem pro freferência (Função impura!)
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "João";
  novaPessoa.cidade = "Pedro Leopoldo";
  novaPessoa.end.rua = "Cansada";
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);
console.log(pessoa);
console.log(novaPessoa);

let a = 3;
let b = a;

a++;
b--;

console.log(a, b);
