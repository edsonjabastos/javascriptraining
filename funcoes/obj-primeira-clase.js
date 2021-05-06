function fn(cb) {
    console.log("executar ação de callback!")
    console.log(typeof cb)
    typeof cb === "function" && cb()
}
function callback() {
    console.log("função passada por parâmetro!")
    
}
fn(callback)
const obj = {
    callback: callback
}
obj.callback()

function f2(n) {
    return function (_n) {
        return n * _n
    }
}
const fun2 = f2(10)
const mult = fun2(2)
console.log(mult)

function f3() {
    f3.count++
    return function() {
        console.log("!Função F3!")
    }
}
f3.count = 0
const funcao3 = f3()
const funcao3a = f3()
const funcao3b = f3()
funcao3()
console.log(f3.count)
//fn(function () {
//    console.log("função passada por parâmetro!")
//})