/* eslint-disable camelcase */
/* eslint-disable indent */
const config = require('../config.js')
const store = require('../store.js')

const signup = data => {
    const { email, username, password, password_confirmation } = data
    return $.ajax({
        url: `${config.apiUrl}/sign-up`,
        method: 'POST',
        data: {
            credentials: {
                email,
                username,
                password,
                password_confirmation
            }
        }
    })
}

const signin = data => {
    const { username, password } = data
    return $.ajax({
        url: `${config.apiUrl}/sign-in`,
        method: 'POST',
        data: {
            credentials: {
                username,
                password
            }
        }
    })
}

const signout = () => {
    return $.ajax({
        url: `${config.apiUrl}/sign-out`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

const changePassword = data => {
    // Passwords cannot be the same
    if (data.passwords.old !== data.passwords.new) {
        store.passwordMismatch = true
        data.passwords = {}
    }

    return $.ajax({
        url: `${config.apiUrl}/change-password`,
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
