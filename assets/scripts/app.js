'use strict'
const authEvents = require('./auth/authEvents.js')
const formRenderer = require('./formRenderer.js')
const landingRenderer = require('./landingRenderer.js')
const pageRenderer = require('./pageRenderer.js')

$(() => {
  // Landing
  landingRenderer.renderLanding()

  // Auth
  formRenderer.renderForms() // calls navRenderer onSuccess
  
  // Pages
  pageRenderer.renderPage()

  $('#signup').on('click', authEvents.onSignup)
  $('#signin').on('click', authEvents.onSignin)
  // alert that form field is empty
  $('input').on('blur', formRenderer.onExitEmptyFormField)

  // About

  // Homepage
})
