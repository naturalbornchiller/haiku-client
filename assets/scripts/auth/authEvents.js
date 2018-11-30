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
    store.passwordMismatch = data.password !== data.password_confirmation
    store.username = data.username
    store.newUser = true

    authApi.signup(data)
        .then(authUi.signinupSuccess)
        .catch(authUi.signinupFailure)
}

const onSignin = e => {
    e.preventDefault()
    const data = {}
    data.username = $('#signin-username').val()
    data.password = $('#signin-password').val()
    // store username and userType
    store.username = data.username
    store.newUser = false

    authApi.signin(data)
        .then(authUi.signinupSuccess)
        .catch(authUi.signinupFailure)
}

const onSignout = e => {
    e.preventDefault()
    console.log('onSignout')
    authApi.signout()
        .then(console.log)
        .catch(console.log)
}

module.exports = {
    onSignup,
    onSignin,
    onSignout
}
