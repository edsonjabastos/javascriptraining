const pessoa = {
    nome: "maria",
    idade: 28,
    "email": "ela@server.com"
}
console.log(pessoa)
for (let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}