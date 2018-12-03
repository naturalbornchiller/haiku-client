/* eslint-disable indent */
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')
const store = require('../store.js')

const onSignup = e => {
    e.preventDefault()
    const data = { credentials: {} }
    data.credentials.email = $('#signup-email').val()
    data.credentials.username = $('#signup-username').val()
    data.credentials.password = $('#signup-password').val()
    data.credentials.password_confirmation = $('#signup-confirmation').val()
    // store username, userType, and password mismatch
    store.passwordMismatch = data.credentials.password !== data.credentials.password_confirmation
    store.newUser = true

    authApi.signup(data)
        .then(authUi.signinupSuccess)
        .catch(authUi.signinupFailure)
}

const onSignin = e => {
    e.preventDefault()
    const data = { credentials: {} }
    data.credentials.username = $('#signin-username').val()
    data.credentials.password = $('#signin-password').val()
    // store username and userType
    store.username = data.credentials.username
    store.newUser = false

    authApi.signin(data)
        .then(authUi.signinupSuccess)
        .catch(authUi.signinupFailure)
}

const onSignout = e => {
    e.preventDefault()
    authApi.signout()
        .then(authUi.signoutSuccess)
        .catch(authUi.signoutFailure)
}

const onChangePassword = e => {
    e.preventDefault()
    const data = { passwords: {} }
    data.passwords.old = $('#old-password').val()
    data.passwords.new = $('#new-password').val()
    console.log(data)
    authApi.changePassword(data)
        .then(authUi.changePasswordSuccess)
        .catch(authUi.changePasswordFailure)
}

module.exports = {
    onSignup,
    onSignin,
    onSignout,
    onChangePassword
}
