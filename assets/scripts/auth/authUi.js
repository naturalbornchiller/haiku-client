/* eslint-disable indent */
require('../../../node_modules/jquery-ui-dist/jquery-ui.js')
const formChecking = require('../form-checking.js')
const successColor = '#98fb98' // color for successful signin
const backgroundColor = '#fff'

const signinupSuccess = () => {
    $('#landing-form').hide('highlight', {color: successColor}, 2030)
    $('body').animate({'background-color': backgroundColor}, 3000, function () {
        $('#homepage').show('slow')
    })
    formChecking.successAlert()
}

const signinupFailure = error => {
    formChecking.invalidSubmitAlerts()
    console.log('signupFailure ran. Error is', error)
}

module.exports = {
    signinupSuccess,
    signinupFailure
}
