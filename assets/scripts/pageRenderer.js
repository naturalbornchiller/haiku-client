/* eslint-disable indent */
const backgroundPageColor = '#fff'
const store = require('./store.js')

function renderPage () {
    // hide auth form
    $('#auth-form').hide('clip', 500)
    // fade background color and show navbar
    $('body').animate({'background-color': backgroundPageColor}, 2000, function () {
        $('#utility-nav').show('slow')
    })

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
