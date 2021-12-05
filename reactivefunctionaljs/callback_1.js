function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (q, w) => console.log(q + w)
const subtrairNoTerminal = (a, s) => console.log(a - s)
const subtrair = (a, s) => a - s


exec(somarNoTerminal, 67, 234)
exec(subtrairNoTerminal, 642142, 42234)

console.log(exec(subtrair, 55, 23))

const rs6030 = exec(subtrair, 60, 30)
console.log(rs6030)

setInterval(function () {
    console.log('Running...')
}, 1000)