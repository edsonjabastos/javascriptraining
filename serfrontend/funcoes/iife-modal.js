// var isValid = true //usando var a variável pode ser sobrescrita e é lançada globalmente

// function init() {
//     let isValid = true
//     console.log('modal', isValid)
// }

// init()

(function(){
    let isValid = true
    console.log('modal', isValid)

    function init(){
        console.log('init modal')
    }

    init()
    
})()