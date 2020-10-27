function done() {
    console.log('done')
    getNextCard()
}

function like() {
    console.log('like')
    getNextCard()
}

function dislike() {
    console.log('dislike')
    getNextCard()
}

function next(e) {
    if (e.target.id === 'skip' || e.target.id === 'next') {
        getNextCard()
    } else if (e.target.id === 'back')
        getPrevCard()
}

function back() {
    console.log('back')
}

document.getElementById('done').addEventListener('touchend', done, false);
document.getElementById('like').addEventListener('touchend', like, false);
document.getElementById('dislike').addEventListener('touchend', dislike, false);
document.getElementById('skip').addEventListener('touchend', next, false);
// document.getElementById('back').addEventListener('touchend', back, false);

// Desktop website
// document.getElementById('done').addEventListener('click', done, false);
// document.getElementById('like').addEventListener('click', like, false);
// document.getElementById('dislike').addEventListener('click', dislike, false);
// document.getElementById('next').addEventListener('click', skip, false);
// document.getElementById('back').addEventListener('click', back, false);

function toggleFullScreen() {

    console.log('fullscreen')

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().then();
        }
    }
}

let cards = []

async function get(url) {
    let response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        // console.error(response)
    }
}

get('cards').then(cardsArray => {
    cards = cardsArray
    console.log(cards)
})

let title = document.getElementById('title')
let text = document.getElementById('text')

let index = 0;

function getNextCard() {


    index = index + 1;
    if (index >= cards.length) {
        index = 0
    }
    let card = cards[index];
    renderCard(card)
}

function getPrevCard() {

    index = index - 1;
    if (index < 0) {
        index = cards.length - 1
    }
    let card = cards[index];
    renderCard(card)
}

function renderCard(card) {

    console.log(index)

    title.innerText = card.title
    if (card.text)
        text.innerText = card.text
    else
        text.innerText = ''
}

window.onload = function() {

    let cardElement = document.getElementById('card')



    // cardElement.style.left = '10%'
    // cardElement.style.top = '10%'

    console.log(cardElement.style.left)

    let touchStartLocation
    let leftPadding = 0
    let topPadding = 0

    cardElement.addEventListener('touchstart', function(e) {
        // grab the location of touch
        touchStartLocation = e.targetTouches[0];
        leftPadding = cardElement.style.left.slice(0, -2) * 1
        topPadding = cardElement.style.top.slice(0, -2) * 1
    })

    cardElement.addEventListener('touchmove', function(e) {

        // grab the location of touch
        let touchLocation = e.targetTouches[0];

        console.log(cardElement.style.left.slice(0, -2))

        let difX = touchLocation.pageX - touchStartLocation.pageX
        if (leftPadding + difX >= 0)
            cardElement.style.left = leftPadding + difX + 'px';
        let difY = touchLocation.pageY - touchStartLocation.pageY
        if (topPadding + difY >= 0)
            cardElement.style.top = topPadding + difY + 'px';
    })
}

// /* record the position of the touch
//   when released using touchend event.
//   This will be the drop position. */
//
// cardElement.addEventListener('touchend', function(e) {
//     // current box position.
//     // cardElement.style.left = '10%';
//     // cardElement.style.top = '10%';
//
//     // console.log(x + '/' + y)
// })