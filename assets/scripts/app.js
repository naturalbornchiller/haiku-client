'use strict'
const authEvents = require('./auth/authEvents.js')
const formRenderer = require('./formRenderer.js')
const landingRenderer = require('./landingRenderer.js')

$(() => {
  // Landing
  landingRenderer.renderLanding()
  $('#enter-button').on('click', formRenderer.renderForms)

  // Auth
  $('#signup').on('click', authEvents.onSignup)
  $('#signin').on('click', authEvents.onSignin)
  $('#signout').on('click', authEvents.onSignout)
  $('#confirm-password-change').on('click', authEvents.onChangePassword)
  // alert that form field is empty
  $('input').on('blur', formRenderer.onExitEmptyFormField)
})
