/* eslint-disable indent */
require('jquery-ui-dist/jquery-ui')

function renderLanding () {
    // fade in 'KIGO' wordmark
    $('.wordmark').show('fade', 2000)
    // fade in the entry message
    $('#enter-message').show('fade', 3000)
    // fade in enter button
    $('#enter-button').show('fade', 4000)
    // make horizontal-rule 'pulse' on enter-button hover
    $('#enter-button').mouseover(function () {
        $('.landing-line').css('width', '100%')
    }).mouseout(function () {
        $('.landing-line').css('width', '0%')
    })
}

module.exports = {
    renderLanding
}
