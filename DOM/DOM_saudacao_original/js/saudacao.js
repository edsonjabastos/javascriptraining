(function () {
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if (nomeUsuario) {
        //document.querySelector(".top-bar p").textContent = "Bem-vindo(a), " + nomeUsuario
        elemento.textContent += "<b>" + nomeUsuario + "</b>"
    } else {
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
})()