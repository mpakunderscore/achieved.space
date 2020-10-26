let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'web')));
let server = require('http').Server(app);
const port = process.env.PORT || 3030;
server.listen(port);

app.get('/cards', async function (request, response) {
    response.json([
        {id: 0, title: "Погулять"},
        {id: 1, title: "Приготовить еды"},
        {id: 2, title: "Почитать книгу"},
        {id: 3, title: "Сходить в зал"},
        {id: 4, title: "Написать другу"},
    ]);
});