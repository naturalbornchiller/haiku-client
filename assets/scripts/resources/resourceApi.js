/* eslint-disable indent */
const config = require('../config.js')
const store = require('../store.js')

const loadRandomResource = () => {
    return $.ajax({
        url: `${config.apiUrl}random`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

const publishHaiku = data => {
    return $.ajax({
        url: `${config.apiUrl}haiku`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${store.user.token}`
        },
        data
    })
}

const showMyHaiku = () => {
    return $.ajax({
        url: `${config.apiUrl}my-haiku`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

const removeHaiku = id => {
    if (!id) id = store.dataId
    return $.ajax({
        url: `${config.apiUrl}haiku/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

const viewHaiku = id => {
    store.dataId = id
    return $.ajax({
        url: `${config.apiUrl}haiku/${id}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${store.user.token}`
        }
    })
}

module.exports = {
    loadRandomResource,
    publishHaiku,
    showMyHaiku,
    removeHaiku,
    viewHaiku
}
