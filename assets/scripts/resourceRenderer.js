/* eslint-disable indent */

const displayOnePoem = obj => {
    $('#one-haiku-title').text(`${obj.haiku.title}`)
    $('#one-haiku-content').text(`${obj.haiku.content}`)
}

module.exports = {
    displayOnePoem
}
