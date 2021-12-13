// minha solução
// function calIMC(peso, altura) {
//     if((typeof peso == 'string') || (typeof altura == 'string')) {
//         console.log('peso e altura devem ser números')
//     } else {
//         return peso / altura
//     }
// }

// console.log(calIMC(98, 1.93))

(function() {
   function calcMedia() {
       let total = 0
       let qtd = arguments.length
       for(let i = 0; i < qtd; i++) {
        if(typeof arguments[i] !== 'number') {
            throw Error('Só número caraio!')
        }
        total += arguments[i]
       }
       return (total / qtd) || 0
   }
   const media = calcMedia(3, 4 ,5)

   console.log(media)
})()