/* eslint-disable camelcase */
/* eslint-disable indent */
const config = require('../config.js')
const store = require('../store.js')

const signup = data => {
    return $.ajax({
        url: `${config.apiUrl}sign-up`,
        method: 'POST',
        data
    })
}

const signin = data => {
    return $.ajax({
        url: `${config.apiUrl}sign-in`,
        method: 'POST',
        data
    })
}

const signout = () => {
    return $.ajax({
        url: `${config.apiUrl}sign-out`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

const changePassword = data => {
    // for alerts
    if (data.passwords.old !== data.passwords.new) {
        store.passwordMismatch = true
    } else { // passwords cannot be the same
        data = {}
    }

    return $.ajax({
        url: `${config.apiUrl}change-password`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${store.user.token}`
        },
        data
    })
}

module.exports = {
    signup,
    signin,
    signout,
    changePassword
}
