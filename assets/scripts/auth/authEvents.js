/* eslint-disable indent */
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')
const store = require('../store.js')

const onSignup = e => {
    e.preventDefault()
    const data = {}
    data.email = $('#signup-email').val()
    data.username = $('#signup-username').val()
    data.password = $('#signup-password').val()
    data.password_confirmation = $('#signup-confirmation').val()
    // store username and password mismatch
    store.username = data.username
    store.passwordMismatch = data.password !== data.password_confirmation

    authApi.signup(data)
        .then(authUi.signinupSuccess)
        .catch(authUi.signinupFailure)
}

const onSignin = e => {
    e.preventDefault()
    const data = {}
    data.username = $('#signin-username').val()
    data.password = $('#signin-password').val()
    // store username
    store.username = data.username

    authApi.signin(data)
        .then(authUi.signinupSuccess)
        .catch(authUi.signinupFailure)
}

module.exports = {
    onSignup,
    onSignin
}
