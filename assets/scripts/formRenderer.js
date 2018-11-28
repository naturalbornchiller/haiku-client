/* eslint-disable indent */
require('jquery-ui-dist/jquery-ui')
const toastr = require('toastr/build/toastr.min')
const store = require('./store.js')
const backgroundAuthColor = '#86C5F4'

/** STANDALONES */
function renderForms () {
    $('#enter-button').on('click', function () {
        $('#auth-form').show()
        $('body').animate({'background-color': backgroundAuthColor}, 2000)
        $('#landing').hide('blind', 500)
        // make input lines 'pulse' on field focus/unfocus
        $('input').focusin(function () {
            $(this).next('.field-line').css('width', '100%')
        }).focusout(function () {
            $(this).next('.field-line').css('width', '0%')
        })
    })
}

function successAlert () {
    // growl alert success
    toastr.success(`Welcome, @${store.username}`)
}

function invalidSubmitAlerts () {
    let emptyFields = false
    // Turns all empty formfields red for two seconds upon submit
    $('div.active input').each(function (i, val) {
        if (!$(this).val()) {
            emptyFields = true
            $(this).prev('p').addClass('text-danger')
            const label = this
            setTimeout(function () {
              $(label).prev('p').removeClass('text-danger')
            }, 2000)
        }
    })

    if (emptyFields) { // alert if fields are empty
        toastr.error('All fields must be filled out.')
    } else if (store.passwordMismatch) { // alert if passwords do not match
        toastr.error('Passwords must match.')
        $('#confirm-password').addClass('text-danger')
        setTimeout(function () {
            $('#confirm-password').removeClass('text-danger')
        }, 2000)
    } else { // alert that email or password is incorrect
        toastr.error('Incorrect email or password.')
    }
}

/** CALLBACKS */
// Turns targeted empty formField red for 2seconds
function onExitEmptyFormField () {
    if (!$(this).val()) {
        $(this).prev('p').addClass('text-danger')
        const label = this
        setTimeout(function () {
            $(label).prev('p').removeClass('text-danger')
        }, 1000)
    }
}

// MOVE TO NEW FILE
function getSeason () {
    const date = new Date()
    const month = date.getMonth()
    let season
    switch (month) {
        case 2:
        case 3:
        case 4:
            season = 'spring'
            break
        case 5:
        case 6:
        case 7:
            season = 'summer'
            break
        case 8:
        case 9:
        case 10:
            season = 'fall'
            break
        default:
            season = 'winter'
            break
    }
    return season
}

module.exports = {
    renderForms,
    successAlert,
    invalidSubmitAlerts,
    onExitEmptyFormField
}
