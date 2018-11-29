/* eslint-disable indent */
require('jquery-ui-dist/jquery-ui')
const store = require('./store.js')

function renderPage () {
    // if new user show 'about' page
    // REMOVE BANG AFTER TESTING
    if (!store.newUser) {
        setTimeout(function () {
            $('#about').slideDown('slow')
            setTimeout(function () {
                $('#haiku-example').show('fade', 2000)
            }, 4000)
        }, 3000)
    } else { // else show 'homepage'
        setTimeout(function () {
            $('#home').slideDown('slow')
        }, 3000)
    }
}

// function addBackgroundImageOnScroll () {
//     $(window).on('scroll', function () {
//         $('.haiku-info-super-container').fadeIn('1000', function () {
//             $(this).addClass('cherry-branch-bg')
//         })
//     })
// }

module.exports = {
    renderPage
}
