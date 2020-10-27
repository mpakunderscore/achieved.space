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

    // console.log(cardElement.style.width)

    let paddingLeft = window.screen.width * 0.1
    let paddingTop = window.screen.height * 0.1
    cardElement.style.left = paddingLeft + 'px'
    cardElement.style.top = paddingTop + 'px'

    let touchStartLocation
    // let leftPadding = 0
    // let topPadding = 0

    cardElement.addEventListener('touchstart', function(e) {
        // grab the location of touch
        cardElement.style.transition = 'none';
        touchStartLocation = e.targetTouches[0];
        // leftPadding = cardElement.style.left.slice(0, -2) * 1
        // topPadding = cardElement.style.top.slice(0, -2) * 1
    })

    cardElement.addEventListener('touchmove', function(e) {

        // grab the location of touch
        let touchLocation = e.targetTouches[0];

        console.log(cardElement.style.left.slice(0, -2))

        let difX = touchLocation.pageX - touchStartLocation.pageX
        if (paddingLeft + difX >= 0)
            cardElement.style.left = paddingLeft + difX + 'px';
        else
            cardElement.style.left = '0px';
        let difY = touchLocation.pageY - touchStartLocation.pageY
        if (paddingTop + difY >= 0)
            cardElement.style.top = paddingTop + difY + 'px';
        else
            cardElement.style.top = '0px';

        if (paddingLeft + difX > 2 * paddingLeft) {
            cardElement.style.left = 2 * paddingLeft + 'px';
        }

        if (paddingTop + difY > 2 * paddingTop) {
            cardElement.style.top = 2 * paddingTop + 'px';
        }
    })

    cardElement.addEventListener('touchend', function(e) {
    // current box position.
    cardElement.style.transition = '0.5s left, 0.5s top';
    cardElement.style.left = paddingLeft + 'px';
    cardElement.style.top = paddingTop + 'px';

    //console.log(x + '/' + y)
})
}

// /* record the position of the touch
//   when released using touchend event.
//   This will be the drop position. */
//