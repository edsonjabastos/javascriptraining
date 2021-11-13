//(function (n1, n2 ,n3) {
//    let isValid = false
//    console.log("menu", isValid, n1, n2, n3)
//    function init() {
//        console.log("init menu")
//    }
//    init()
//})(30, 70, 100)
//(function (win, doc) {
//    let isValid = false
//    win.alert("Hello World!")
//    console.log("menu", isValid)
//    function init() {
//        console.log("init menu")
//    }
//    init()
//})(window, document)
(function (win, doc) {
    "use strict"
    let isValid = false
    console.log("menu", isValid)
    function init() {
        console.log("init menu")
    }
    init()
})(window, document)
//console.log("isValid: ", isValid)