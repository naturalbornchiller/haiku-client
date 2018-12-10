/* eslint-disable no-return-assign */
/* eslint-disable indent */
const toastr = require('toastr/build/toastr.min')
const store = require('./store.js')
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

const viewPoem = obj => {
    $('.flex-container').hide('fast')
    $('.view-haiku').show('slow')
    const haiku = breakUpLines(obj.haiku.content)
    store.haiku = haiku.split('<br>')
    store.title = obj.haiku.title
    setTimeout(function () {
        $('.one-haiku-content').html(`${haiku}`)
    }, 400)
}

const publishHaikuSuccessAlert = () => toastr.success('Nice job!')
const publishHaikuFailureAlert = () => toastr.error('Try again')
const removeHaikuSuccessAlert = () => toastr.success('Deleted')
const loadResourceFailureAlert = () => toastr.error('Unknown error. Check connection...')
module.exports = {
    displayOnePoem,
    removeOnePoem,
    viewPoem,
    publishHaikuSuccessAlert,
    publishHaikuFailureAlert,
    removeHaikuSuccessAlert,
    loadResourceFailureAlert
}
