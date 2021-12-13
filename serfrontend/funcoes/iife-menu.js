// var isValid = false //usando var a variável pode ser sobrescrita e é lançada globalmente

// function init() {
//     let isValid = false
//     console.log('menu', isValid)
// }

// init()

(function(win, doc){
    'use strict'

    let isValid = false
    // isValid = false

    // win.alert('eaerr man!')

    console.log('menu', isValid)

    function init(){
        console.log('init menu')
    }

    init()
    
})(window, document)

// console.log('isValid ==> ', isValid)