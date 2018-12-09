/* eslint-disable indent */
const resourceRenderer = require('../resourceRenderer.js')

const onLoadRandomResourceSuccess = data => resourceRenderer.displayOnePoem(data)

const onDriftArrowSuccess = data => {
    resourceRenderer.removeOnePoem()
    resourceRenderer.displayOnePoem(data)
}

const onPublishHaikuSuccess = data => {
    $('#write-form').trigger('reset')
    resourceRenderer.publishHaikuSuccessAlert()
}

const onPublishHaikuFailure = () => resourceRenderer.publishHaikuFailureAlert

const onShowMyHaikuSuccess = (data) => {
    resourceRenderer.displayMyPoems(data)
}
module.exports = {
    onLoadRandomResourceSuccess,
    onDriftArrowSuccess,
    onPublishHaikuSuccess,
    onPublishHaikuFailure,
    onShowMyHaikuSuccess
}
