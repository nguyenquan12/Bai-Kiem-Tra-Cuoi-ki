const log = document.querySelector('.log')
const container = document.querySelector('.container')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const login = document.querySelector('.login')
const register = document.querySelector('.register')
const submit = () => {
    alert("Successfully!!!")
}
const handleLogin = () => {
    loginForm.classList.toggle('hide')
    registerForm.classList.toggle('hide')
}
