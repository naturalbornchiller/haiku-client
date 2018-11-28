/* eslint-disable indent */
require('../../../node_modules/jquery-ui-dist/jquery-ui.js')
const formRenderer = require('../form-renderer.js')
const pageRenderer = require('../page-render.js')

const signinupSuccess = () => {
    formRenderer.successAlert()
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
