'use strict'
const authEvents = require('./auth/authEvents.js')
const formRenderer = require('./formRenderer.js')
const landingRenderer = require('./landingRenderer.js')

$(() => {
  // Landing
  landingRenderer.renderLanding()

  // Auth
  formRenderer.renderForms()
  $('#signup').on('click', authEvents.onSignup)
  $('#signin').on('click', authEvents.onSignin)
  // alert that form field is empty
  $('input').on('blur', formRenderer.onExitEmptyFormField)

  // About

  // Homepage
})
