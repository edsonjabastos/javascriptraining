let n = "global"
function mostraN() {
    let n = "n local" //var e const para escopo global e let para local
    if (true) {
        var n1 = "n dentro de if com var"
    }
    console.log("valor de n: " + n1)
    console.log("valor de n: " + n)
}
mostraN()
console.log("valor de n no escopo global: " + n)
function fnExt() {
    let n = "n local na fnExt"
    console.log(n)
    function fnInt() {
        let n = "n local na fnInt"
        console.log(n)
    }
    fnInt()
    console.log(n)
}
fnExt()