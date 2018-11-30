/* eslint-disable indent */
require('../../../node_modules/jquery-ui-dist/jquery-ui.js')
const formRenderer = require('../formRenderer.js')
const navRenderer = require('../navRenderer.js')
const pageRenderer = require('../pageRenderer.js')
const store = require('../store.js')

const signinupFailure = () => formRenderer.invalidSubmitAlerts()
const signinupSuccess = data => {
    store.user = data.user
    formRenderer.signinSuccessAlert()
    navRenderer.renderNav()
    pageRenderer.renderPage()
}

const signoutFailure = () => formRenderer.signoutFailureAlert()
const signoutSuccess = () => {
    formRenderer.renderForms()
    formRenderer.signoutSuccessAlert()
}

const changePasswordFailure = () => pageRenderer.invalidSubmitAlerts
const changePasswordSuccess = () => {
    $('.modal').modal('hide')
    pageRenderer.changePasswordSuccessAlert()
}

module.exports = {
    signinupSuccess,
    signinupFailure,
    signoutSuccess,
    signoutFailure,
    changePasswordSuccess,
    changePasswordFailure
}
