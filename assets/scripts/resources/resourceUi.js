/* eslint-disable indent */
const resourceRenderer = require('../resourceRenderer.js')

const onLoadRandomResourceSuccess = data => resourceRenderer.displayOnePoem(data)

const onDriftArrowSuccess = data => {
    resourceRenderer.removeOnePoem()
    resourceRenderer.displayOnePoem(data)
}

module.exports = {
    onLoadRandomResourceSuccess,
    onDriftArrowSuccess
}
