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

function skip() {
    console.log('skip')
    getNextCard()
}

function back() {
    console.log('back')
    // getPrevCard()
}

document.getElementById('done').addEventListener('touchend', done, false);
document.getElementById('like').addEventListener('touchend', like, false);
document.getElementById('dislike').addEventListener('touchend', dislike, false);
document.getElementById('skip').addEventListener('touchend', skip, false);

document.getElementById('back').addEventListener('touchend', back, false);

function toggleFullScreen() {
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

    let card = cards[index];
    index = index + 1;
    if (index >= cards.length) {
        index = 0
    }

    renderCard(card)
}

// function getPrevCard() {
//
//     if (index-- < 0) {
//         index = cards.length - 1
//     }
//     let card = cards[index];
//
//     renderCard(card)
// }

function renderCard(card) {

    console.log(index)

    title.innerText = card.title
    if (card.text)
        text.innerText = card.text
    else
        text.innerText = ''
}