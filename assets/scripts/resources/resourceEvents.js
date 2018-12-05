/* eslint-disable indent */
const resourceApi = require('./resourceApi.js')
const resourceUi = require('./resourceUi.js')

const onLoadRandomResource = () => {
    resourceApi.loadRandomResource()
        .then(resourceUi.loadRandomResourceSuccess)
        .catch(console.log)
}

const onLeftArrow = e => {
    e.preventDefault()
}

module.exports = {
    onLoadRandomResource,
    onLeftArrow
}
