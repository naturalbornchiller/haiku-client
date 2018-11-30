/* eslint-disable indent */
const store = require('./store.js')
const backgroundPageColor = '#fff'

function renderNav () {
    // hide auth form
    $('#auth-form').hide('clip', 500)
    // fade background color and show navbar
    $('body').animate({'background-color': backgroundPageColor}, 2000, function () {
        $('#utility-nav').show('slow')
        attachDropdownBlindEffect()
        $('#nav-greeting').text(`Hello, ${store.username}`)
    })
}

function attachDropdownBlindEffect () {
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
    })

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
    })
}

module.exports = {
    renderNav
}
