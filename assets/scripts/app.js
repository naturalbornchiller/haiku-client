'use strict'
const authEvents = require('./auth/authEvents.js')
const formChecking = require('./form-checking.js')

$(() => {
  // Auth
  $('#signup').on('click', authEvents.onSignup)
  $('#signin').on('click', authEvents.onSignin)

  // Alert that form field is empty
  $('input').on('blur', formChecking.onExitEmptyFormField)
  // Clear error message onFocus
  $('input').on('focus', formChecking.onReenterFormField)
})
