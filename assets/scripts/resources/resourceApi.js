/* eslint-disable indent */
const config = require('../config.js')
const store = require('../store.js')

const loadRandomResource = () => {
    console.log('In load resource!')
    return $.ajax({
        url: `${config.apiUrl}random`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

module.exports = {
    loadRandomResource
}
