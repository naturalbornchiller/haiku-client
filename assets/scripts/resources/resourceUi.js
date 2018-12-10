/* eslint-disable indent */
const resourceRenderer = require('../resourceRenderer.js')
const showHaikuSchema = require('../resourceDisplay.handlebars')

const onLoadRandomResourceSuccess = data => resourceRenderer.displayOnePoem(data)

const onDriftArrowSuccess = data => {
    resourceRenderer.removeOnePoem()
    resourceRenderer.displayOnePoem(data)
}

const onPublishHaikuSuccess = () => {
    $('#write-form').trigger('reset')
    resourceRenderer.publishHaikuSuccessAlert()
}

const onPublishHaikuFailure = () => resourceRenderer.publishHaikuFailureAlert

const onShowMyHaikuSuccess = (data) => {
    const showHaikuHTML = showHaikuSchema({haiku: data.haiku})
    $('.flex-container').html(showHaikuHTML)
}

const onViewHaikuSuccess = data => resourceRenderer.viewPoem(data)

const onRemoveHaikuSuccess = () => {
    resourceRenderer.removeHaikuSuccessAlert()
    $('#back-arrow').trigger('click')
}

module.exports = {
    onLoadRandomResourceSuccess,
    onDriftArrowSuccess,
    onPublishHaikuSuccess,
    onPublishHaikuFailure,
    onShowMyHaikuSuccess,
    onViewHaikuSuccess,
    onRemoveHaikuSuccess
}
