const txtEmail = document.getElementById("txtEmail")
const msgFeedback = document.getElementById("newsletterFeedback")
function registerEmail() {
    let email = txtEmail.value
    msgFeedback.innerHTML = `O e-mail ${email} foi cadastrado com sucesso!`
}