(function () {
    const nomeUsuario = "Edson"
    if (nomeUsuario) {
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p>Hello, <b> ${nomeUsuario} </b></p>`
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
   }
})()