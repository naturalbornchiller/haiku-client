/* eslint-disable indent */
const resourceRenderer = require('../resourceRenderer.js')

const loadRandomResourceSuccess = data => {
    resourceRenderer.displayOnePoem(data)
}

module.exports = {
    loadRandomResourceSuccess
}
