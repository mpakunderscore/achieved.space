let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'web')));
let server = require('http').Server(app);
const port = process.env.PORT || 3030;
server.listen(port);

const { GoogleSpreadsheet } = require('google-spreadsheet');

let doc = new GoogleSpreadsheet('1PYv4TcWNXhKXuRFq_60owp1CO6VSBxkfsD0V_jaBwj0');

let cards = []

let readTable = async function () {

    cards = []

    await doc.useApiKey('AIzaSyBApsCS7uiGyec_Tj0Qh19Y1hbmgQn12CE');
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    for (let i = 0; i < sheet.rowCount; i++) {
        if (rows[i] && rows[i]._rawData[2]) {
            let card = {
                id: rows[i]._rawData[0],
                title: updateLinks(rows[i]._rawData[1]),
                text: updateLinks(rows[i]._rawData[2]),
                categories: rows[i]._rawData[3],
                emoji: rows[i]._rawData[4],
                // level: rows[i]._rawData[4],
            }
            cards.push(card)
            console.log(card)
        }
    }
}

readTable().then()

function updateLinks(text) {
    if (!text)
        return ''

    return text.replace('google', '<a href="https://www.google.com/search?q=' + text + '">' + text + '</a>')
}

app.get('/cards', async function (request, response) {
    response.json(cards);
});

app.get('/read', async function (request, response) {
    readTable().then()
    response.json();
});
