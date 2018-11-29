/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
/* eslint-disable one-var */
/* eslint-disable indent */
require('jquery-ui-dist/jquery-ui')
const store = require('./store.js')

function renderPage () {
    // if new user show 'about' page
    // REMOVE BANG AFTER TESTING
    if (store.newUser) {
        renderAboutPage()
    } else { // else show 'homepage'
        renderHomePage()
    }
}

function renderAboutPage () {
    setTimeout(function () {
        $('#about').show('fade', 1000)
        $('#nav-search').animate({opacity: '0'}, 600)
        $('#haiku-example').show('fade', 3000)
        $('#nav-home').on('click', function () {
            $(this).off()
            $('#about').hide('fade', 1500)
            renderHomePage()
        })
    }, 2500)
}

function renderHomePage () {
    setTimeout(function () {
        $('#homepage').show('fade', 1000)
        $('#nav-search').animate({opacity: '1'}, 1000)
        $('#nav-about').on('click', function () {
            $(this).off()
            $('#homepage').hide('fade', 1500)
            renderAboutPage()
        })
    }, 2500)
}

module.exports = {
    renderPage
}
