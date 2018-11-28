/* eslint-disable indent */
const store = require('./store.js')
const backgroundPageColor = '#fff'

function renderNav () {
    // hide auth form
    $('#auth-form').hide('clip', 500)
    // fade background color and show navbar
    $('body').animate({'background-color': backgroundPageColor}, 2000, function () {
        $('#utility-nav').show('slow')
        $('#nav-greeting').text(`Hello, @${store.username}`)
    })
}

module.exports = {
    renderNav
}
