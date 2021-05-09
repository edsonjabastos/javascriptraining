let arrayX = [1, 3, 5, 7, 9]
let arrayY = arrayX.push(11, 13, true, "ola mundo") // adiciona valores passados no fim da array push retorna nova quantidade de valores
console.log(arrayY)
console.log(arrayX)
let arrayZ = arrayX.pop() // deleta o ultimo valor no array e retorna o valor deletado
console.log(arrayZ)
console.log(arrayX)
let arrayV = arrayX.shift() // deleta o primeiro valor no array e retorna o valor deletado
console.log(arrayV)
console.log(arrayX)
let arrayW = arrayX.unshift(10, 9, 8, 7) // adiciona os valores passados no inicio da array e retorna a qualtidade de valores
console.log(arrayW)
console.log(arrayX)
let arrayD = arrayX.slice(4, 7) // corta a array de acordo com a indicação passada e retorna os valores retirados
console.log(arrayD) // (0, 1) recorta os entre os indices (0) a partir do indice
console.log(arrayX)
let arrayE = arrayX.splice(0, 2)//, "rélou uorldi!", !false) //(0, 1) começo do recorte, quantos itens a serem recortados
console.log(arrayE) // MODIFICA A ARRAY ORIGINAL e retorna os itens deletados
console.log(arrayX) // a partir do terceiro parâmetro adiciona itens