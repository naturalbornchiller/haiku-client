/* eslint-disable indent */
const resourceApi = require('./resourceApi.js')
const resourceUi = require('./resourceUi.js')

const onLoadRandomResource = () => {
    resourceApi.loadRandomResource()
        .then(resourceUi.onLoadRandomResourceSuccess)
        .catch(console.log)
}

const onDriftArrow = e => {
    e.preventDefault()
    resourceApi.loadRandomResource()
        .then(resourceUi.onDriftArrowSuccess)
        .then(console.log)
}

module.exports = {
    onLoadRandomResource,
    onDriftArrow
}
