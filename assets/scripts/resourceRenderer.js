/* eslint-disable no-return-assign */
/* eslint-disable indent */
const toastr = require('toastr/build/toastr.min')
const getRandomTime = () => Math.floor(300 + (600 - 300 + 1) * Math.random())
const breakUpLines = stringHaiku => stringHaiku.split('/').join('<br>')

const displayOnePoem = obj => {
    const haiku = breakUpLines(obj.haiku.content)
    setTimeout(function () {
        $('#one-haiku-title').html(`${obj.haiku.title}`)
        $('#one-haiku-content').html(`${haiku}`)
        $('#one-haiku-author').html(`by ${obj.haiku.author}`)
        $('#one-haiku-title').show('slide', getRandomTime())
        $('#one-haiku-content').show('slide', getRandomTime())
        $('#one-haiku-author').show('slide', getRandomTime())
    }, 400)
}

const removeOnePoem = () => {
    $('#one-haiku-title').hide('slide', {direction: 'right'}, getRandomTime())
    $('#one-haiku-content').hide('slide', {direction: 'right'}, getRandomTime())
    $('#one-haiku-author').hide('slide', {direction: 'right'}, getRandomTime())
}

const publishHaikuSuccessAlert = () => toastr.success('Nice job!')
const publishHaikuFailureAlert = () => toastr.error('Try again')

module.exports = {
    displayOnePoem,
    removeOnePoem,
    publishHaikuSuccessAlert,
    publishHaikuFailureAlert
}
