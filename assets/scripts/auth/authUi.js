/* eslint-disable indent */
require('../../../node_modules/jquery-ui-dist/jquery-ui.js')
const formRenderer = require('../formRenderer.js')
const navRenderer = require('../navRenderer.js')
const pageRenderer = require('../pageRenderer.js')

const signinupSuccess = () => {
    formRenderer.successAlert()
    navRenderer.renderNav()
    pageRenderer.renderPage()
}

const signinupFailure = error => {
    formRenderer.invalidSubmitAlerts()
    console.log('signupFailure ran. Error is', error)
}

module.exports = {
    signinupSuccess,
    signinupFailure
}
