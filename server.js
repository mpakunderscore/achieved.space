let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'web')));
let server = require('http').Server(app);
const port = process.env.PORT || 3030;
server.listen(port);

const { GoogleSpreadsheet } = require('google-spreadsheet');

let doc = new GoogleSpreadsheet('15OS4jVE_FvyVH3FOu-WtvtApahoeX24x-fd7o0R2sus');

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
                categories: rows[i]._rawData[1],
                title: rows[i]._rawData[2],
                text: rows[i]._rawData[3],
                level: rows[i]._rawData[4],
            }
            cards.push(card)
            console.log(card)
        }
    }
}

readTable().then()

app.get('/cards', async function (request, response) {
    response.json(cards);
});

app.get('/read', async function (request, response) {
    readTable().then()
    response.json();
});
