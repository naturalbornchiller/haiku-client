/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */
/* eslint-disable one-var */
/* eslint-disable indent */
require('jquery-ui-dist/jquery-ui')
const toastr = require('toastr/build/toastr.min')
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
    }, 1500)
}

function invalidSubmitAlerts () {
    let emptyFields = false
    // Turns all empty formfields red for two seconds upon submit
    if (!$('#old-password').val()) {
        emptyFields = true
        $('#old-password').addClass('text-danger')
        setTimeout(function () {
            $('#old-password').removeClass('text-danger')
        }, 2000)
    } else if (!$('#new-password').val()) {
        emptyFields = true
        $('#new-password').addClass('text-danger')
        setTimeout(function () {
            $('#new-password').removeClass('text-danger')
        }, 2000)
    }

    if (emptyFields) { // alert if fields are empty
        toastr.error('Both fields must be filled out')
    } else if (!store.passwordMismatch) { // alert if passwords do not match
        toastr.error('New password must actually be new')
        $('.modal-body input').addClass('text-danger')
        setTimeout(function () {
            $('.modal-body input').removeClass('text-danger')
        }, 2000)
    } else { // alert that email or password is incorrect
        toastr.error('Old password incorrect')
    }
}

const changePasswordSuccessAlert = () => toastr.success('Password change went through')

module.exports = {
    renderPage,
    invalidSubmitAlerts,
    changePasswordSuccessAlert
}
