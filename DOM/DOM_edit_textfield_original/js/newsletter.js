const txtEmail = document.getElementById("txtEmail")
function editEmail() {
    txtEmail.disabled = false
    txtEmail.focus()
}
function disableEmail() {
    txtEmail.disabled = true
}