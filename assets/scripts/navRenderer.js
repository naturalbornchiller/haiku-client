/* eslint-disable indent */
const store = require('./store.js')
const authEvents = require('./auth/authEvents.js')
const backgroundPageColor = '#fff'

function renderNav () {
    // hide auth form
    $('#auth-form').hide('clip', 500)
    // fade background color and show navbar
    $('body').animate({'background-color': backgroundPageColor}, 2000, function () {
        $('#utility-nav').show('slow')
        attachDropdownBlindEffect()
        // $('#signout').on('click', authEvents.onSignout)
        $('#nav-greeting').text(`Hello, ${store.username}`)
    })
}

function attachDropdownBlindEffect () {
    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown()
        $('#signout').on('click', authEvents.onSignout)
    })

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp()
    })
}

function attachSearchColorSwitchEffect () {
    const navSearchDefaultColor = `#nav-search::placeholder {
        color: #fff;
        opacity: 1;
      }`
    const navSearchAltColor = `#nav-search::placeholder {
        color: #000;
        opacity: 1;
      }`
    $('#nav-search').focusin(function () {
        if ($('#placeholder-style').length === 0) {
            $('head').append(`<style id="placeholder-style">
                    ${navSearchAltColor}
                </style>`)
        } else {
            $('#placeholder-style').text(navSearchAltColor)
        }
        $(this).animate({
            'color': '#000',
            'caret-color': '#000',
            'background': '#fff',
            'border-bottom': '1px solid black',
            'box-shadow': '0 1px 0 0 #22282b'
        }, 1000)
    }).focusout(function () {
        $('#placeholder-style').text(navSearchDefaultColor)
        $(this).css({
            'color': '#fff',
            'background': '#000',
            'border-bottom': '1px solid white',
            'box-shadow': '0 1px 0 0 #22282b'
        })
    })
}

module.exports = {
    renderNav
}
