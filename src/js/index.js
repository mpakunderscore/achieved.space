let firstCardsIndex = 0;
let firstCards = [
    // {
    //     title: 'Тестовые ссылки',
    //     text: '<a href="https://google.com" target="_blank">Google</a><br/><br/>' +
    //         '<a href="https://docs.google.com/spreadsheets/d/15OS4jVE_FvyVH3FOu-WtvtApahoeX24x-fd7o0R2sus/edit#gid=0" target="_blank">Document</a><br/><br/>' +
    //         '<a href="/achieved.space.apk" target="_blank">Ссылка на APK</a><br/>' + ''
    // },
    {
        emoji: '☀️',
        title: 'Several cards<br/>will be available<br/>each day',
        text: 'It may be a task, a word or something else'
    },
    {
        emoji: '🗂',
        title: 'Cards have categories and<br/>difficulty levels',
        text: 'Points are awarded for completion'
    },
    {
        emoji: '📅',
        title: 'Some cards<br/>can be completed<br/>only once',
        text: 'Others<br/>have to be done<br/> every day'
    },
]

let states = {
    strength: 0,
    perception: 0,
    endurance: 0,
    charisma: 0,
    intelligence: 0,
    agility: 0,
    luck: 0,
    vocabulary: 0,
    imagination: 0,
}

function done() {
    console.log('done')
    // getNextCard()
}

function like() {
    console.log('like')
    // getNextCard()
}

function dislike() {
    console.log('dislike')
    // getNextCard()
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

let emojisArray = [
    '😄','😃','😀','😊','☺','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹'
];

let getEmoji = () => {
    return emojisArray[Math.floor(Math.random() * emojisArray.length)];
};

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

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

get('cards').then(cardsArray => {
    cards = shuffle(cardsArray)
    console.log(cards)
})

let cardElement = document.getElementById('card')
let emoji = document.getElementById('emoji')
let title = document.getElementById('title')
let text = document.getElementById('text')
let info = document.getElementById('info')

let likeMark = document.getElementById('like-mark')
let doneMark = document.getElementById('done-mark')
let dislikeMark = document.getElementById('dislike-mark')

let index = 0;

function getNextCard() {

    if (firstCardsIndex < firstCards.length) {
        renderCard(firstCards[firstCardsIndex])
        firstCardsIndex++
        return
    }

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

let likeCount = 0
let likeCard = false
let doneCount = 0
let doneCard = false

function renderCard(card) {

    // console.log(index)
    likeCard = false
    doneCard = false

    if (!card.text)
        card.text = 'EMPTY TEXT'

    // if (!card.id)
    //     card.id = ''

    // if (!card.categories)
    //     card.categories = '?'

    // if (!card.level)
    //     card.level = '?'

    emoji.innerText = card.emoji ? card.emoji : getEmoji()
    title.innerHTML = card.title
    text.innerHTML = card.text
    // info.innerHTML = card.id > 0 ? 'ID: ' + card.id + ' <br/>Categories: ' + card.categories + ' <br/>Level: ' + card.level : ''
    info.innerHTML = card.categories ? card.categories.toUpperCase().replaceAll(':', ' +').replaceAll(',', '<br/>') : ''

    likeMark.style.display = 'none'
    doneMark.style.display = 'none'
    dislikeMark.style.display = 'none'
    cardElement.style.backgroundColor = 'ghostwhite'
}

let random = () => {
    return Math.floor(Math.random() * 10);
}

window.onload = function () {

    // console.log(cardElement.style.width)

    let paddingLeft = window.screen.width * 0.1
    let paddingTop = window.screen.height * 0.1
    // cardElement.style.left = paddingLeft + 'px'
    // cardElement.style.top = paddingTop + 'px'

    let touchStartLocation
    let left = false
    let right = false
    let top = false
    let bottom = false

    cardElement.addEventListener('touchstart', function (e) {
        // grab the location of touch
        cardElement.style.transition = 'none';
        touchStartLocation = e.targetTouches[0];
        // leftPadding = cardElement.style.left.slice(0, -2) * 1
        // topPadding = cardElement.style.top.slice(0, -2) * 1

        cardElement.classList.add('hold')
    })

    cardElement.addEventListener('touchmove', function (e) {

        // grab the location of touch
        let touchLocation = e.targetTouches[0];

        let difX = touchLocation.pageX - touchStartLocation.pageX
        if (paddingLeft + difX >= 0) {
            left = false
            cardElement.style.left = paddingLeft + difX + 'px';
        } else {
            left = true
            cardElement.style.left = '0px';
        }

        let difY = touchLocation.pageY - touchStartLocation.pageY
        if (paddingTop + difY >= 0) {
            top = false
            cardElement.style.top = paddingTop + difY + 'px';
        } else {
            top = true
            cardElement.style.top = '0px';
        }


        if (paddingLeft + difX >= 2 * paddingLeft) {
            right = true
            cardElement.style.left = 2 * paddingLeft + 'px';
        } else {
            right = false
        }

        if (paddingTop + difY >= 2 * paddingTop) {
            bottom = true
            cardElement.style.top = 2 * paddingTop + 'px';
        } else {
            bottom = false
        }

        if (top && right) {
            // console.log('LIKE')
            if (!likeCard) {
                likeMark.style.display = 'flex'
                document.getElementById('like-count').innerText = ++likeCount
            }
            likeCard = true
            // cardElement.style.backgroundColor = 'var(--color-green)'
        }

        if (top && left) {
            // console.log('DONE')
            if (!doneCard) {
                doneMark.style.display = 'flex'
                document.getElementById('done-count').innerText = ++doneCount
            }
            doneCard = true
        }

        if (bottom && left) {
            dislikeMark.style.display = 'flex'
            // console.log('DISLIKE')
        }

        // console.log(top, right, bottom, left)
    })

    function setCardCenter() {
        cardElement.style.transition = '0.5s left, 0.5s top';
        cardElement.style.left = paddingLeft + 'px';
        cardElement.style.top = paddingTop + 'px';
    }

    cardElement.addEventListener('touchend', function (e) {

        setCardCenter()

        if (right && bottom) {
            getNextCard()
        }

        cardElement.classList.remove('hold')

        left = false
        right = false
        top = false
        bottom = false
    })
}
// /* record the position of the touch
//   when released using touchend event.
//   This will be the drop position. */
//
