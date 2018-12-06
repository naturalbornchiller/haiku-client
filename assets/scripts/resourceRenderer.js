/* eslint-disable no-return-assign */
/* eslint-disable indent */

const displayOnePoem = obj => {
    setTimeout(function () {
        $('#one-haiku-title').text(`${obj.haiku.title}`)
        $('#one-haiku-content').text(`${obj.haiku.content}`)
        $('#one-haiku-author').text(`by ${obj.haiku.author}`)
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

const getRandomTime = () => Math.floor(300 + (600 - 300 + 1) * Math.random())

module.exports = {
    displayOnePoem,
    removeOnePoem
}
