/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
/* eslint-disable one-var */
/* eslint-disable indent */
require('jquery-ui-dist/jquery-ui')
const resourceEvents = require('./resources/resourceEvents.js')
const toastr = require('toastr/build/toastr.min')
const store = require('./store.js')

function renderPage () {
    // if new user show 'about' page
    if (store.newUser) {
        renderAboutPage()
    } else { // else show 'homepage'
        renderHomePage()
    }
}

function renderAboutPage () {
    setTimeout(function () {
        $('#about').show('fade', 1000)
        $('#nav-search').animate({opacity: '0'}, 400)
        $('#haiku-example').show('fade', 3000)
        $('#nav-poems').on('click', function () {
            $(this).off()
            $('#haiku-example').hide('fade', 1600)
            $('#about').hide('fade', 1500)
            renderHomePage()
        })
    }, 1500)
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
        resourceEvents.onLoadRandomResource()
        loadResourceActions()
    }, 1500)
}

function loadResourceActions () {
    // Resource
    $('#left-arrow').on('click', resourceEvents.onLeftArrow)
}

// ALERTS
const changePasswordSuccessAlert = () => toastr.success('Password change went through')
function invalidSubmitAlerts () {
    const emptyFields = !$('#old-password').val() || !$('#new-password').val()
    console.log(emptyFields)

    if (emptyFields) { // alert if fields are empty
        toastr.error('Both fields must be filled out')
    } else if (!store.passwordMismatch) { // alert if passwords match
        toastr.error('New password must actually be new')
    } else { // alert that password is incorrect
        toastr.error('Old password incorrect')
    }
}

module.exports = {
    renderPage,
    invalidSubmitAlerts,
    changePasswordSuccessAlert
}
