const teste = function (cb) {
    console.log("função teste.")
    console.log(cb)
    if (typeof cb === "function") {
        cb(30)
    }
}
const fn = function (param) {
    console.log("função fn!")
    console.log(param)
}
//teste(function () {
//    console.log("função anônima de callback!")
//})
//teste(fn)