'use strict'
const authEvents = require('./auth/authEvents.js')
const formRenderer = require('./form-renderer.js')
const landingRenderer = require('./landing-renderer.js')

$(() => {
  // Landing
  landingRenderer.renderLanding()

  // Auth
  formRenderer.addPulseToFormFields()
  $('#signup').on('click', authEvents.onSignup)
  $('#signin').on('click', authEvents.onSignin)
  // alert that form field is empty
  $('input').on('blur', formRenderer.onExitEmptyFormField)

  // About

  // Homepage
})
