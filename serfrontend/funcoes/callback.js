const teste = function(cb) {
    console.log('função teste')
    console.log(cb)
    typeof cb === 'function' && cb('passado por parametro para cêbê')
    // if(typeof cb === 'function') {
    //     cb('passado por parametro para cêbê')
    // }
}

const fn = function(parametro) {
    console.log('função calbackerizada')
    console.log(parametro)
}

// fn()

teste(fn)

teste()