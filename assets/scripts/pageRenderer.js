/* eslint-disable indent */
const store = require('./store.js')

function renderPage () {
      // if new user show 'about' page
    if (store.newUser) {
        setTimeout(function () {
            $('#about').slideDown('slow')
        }, 3000)
    } else { // else show 'homepage'
        setTimeout(function () {
            $('#homepage').slideDown('slow')
        }, 3000)
    }
}

module.exports = {
    renderPage
}
