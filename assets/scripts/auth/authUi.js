/* eslint-disable indent */
require('../../../node_modules/jquery-ui-dist/jquery-ui.js')
const formRenderer = require('../formRenderer.js')
const navRenderer = require('../navRenderer.js')
const pageRenderer = require('../pageRenderer.js')
const store = require('../store.js')

const signinupSuccess = data => {
    store.user = data.user
    console.log(store.user)
    formRenderer.signinSuccessAlert()
    navRenderer.renderNav()
    pageRenderer.renderPage()
}

const signinupFailure = error => {
    formRenderer.invalidSubmitAlerts()
    console.log('signupFailure ran. Error is', error)
}

const signoutSuccess = () => {
    formRenderer.renderForms()
    formRenderer.signoutSuccessAlert()
}

module.exports = {
    signinupSuccess,
    signinupFailure,
    signoutSuccess
}
