function done() {
    console.log('done')
}

function like() {
    console.log('like')
}

function dislike() {
    console.log('dislike')
}

function skip() {
    console.log('skip')
    getNextCard()
}

document.getElementById('done').addEventListener('touchstart', done, false);
document.getElementById('like').addEventListener('touchstart', like, false);
document.getElementById('dislike').addEventListener('touchstart', dislike, false);
document.getElementById('skip').addEventListener('touchstart', skip, false);

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
})

function getNextCard() {
    let card = cards[Math.floor(Math.random() * cards.length)];
    // document.getElementById('title').innerText = card.id
    document.getElementById('title').innerText = card.title
    document.getElementById('text').innerText = card.text
}