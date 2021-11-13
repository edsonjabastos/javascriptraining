/*try {
function numberCatcher(nC) {
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total / arguments.length
}
    console.log(numberCatcher(2, 4, 5, 3))
    if (numberCatcher = numberCatcher(4, "")) {
        throw Error ("somente números!")
    }
} catch (e) {
    console.log(e.message)
}
*/ //SOLUÇÃO DO PROF DANIEL
(function(){
    function calcM(){
    let total = 0
    let qtd = arguments.length
    for(let i = 0; i < qtd; i++){
    if(typeof arguments[i] !== "number"){
    throw Error("Only numbers!")
    }
    total += arguments[i]
    }
    return total / qtd
    }
    let media = calcM(2, 4, 4, 5, 6, 4, 5)
    console.log(media)
})()
