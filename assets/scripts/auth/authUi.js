/* eslint-disable indent */
require('../../../node_modules/jquery-ui-dist/jquery-ui.js')
const formRenderer = require('../form-renderer.js')

const signinupSuccess = () => {
    formRenderer.successAlert()
}

const signinupFailure = error => {
    formRenderer.invalidSubmitAlerts()
    console.log('signupFailure ran. Error is', error)
}

module.exports = {
    signinupSuccess,
    signinupFailure
}
