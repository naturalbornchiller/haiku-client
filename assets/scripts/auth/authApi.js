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
    console.log(store.user.token)
    return $.ajax({
        url: `${config.apiUrl}/sign-out`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

module.exports = {
    signup,
    signin,
    signout
}
