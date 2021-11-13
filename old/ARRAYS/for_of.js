const arrayX = [1, 2, 3]
const obj = {
    nome: "Edson",
    idade: "26",
    email: "edson@email.com"
}
for (let prop in obj) {
    console.log(prop)
    console.log(obj[prop])
}
for (X of arrayX) {
    console.log(X)
}