let express = require('express');
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, 'web')));
let server = require('http').Server(app);
const port = process.env.PORT || 3030;
server.listen(port);

let actions = [
    {id: 0, title: 'Погулять', text: 'Свежий воздух и новая картинка перед глазами'},
    {id: 1, title: 'Приготовить еды', text: ''},
    {id: 2, title: 'Почитать книгу', text: 'Могу предложить вот {object}'},
    {id: 3, title: 'Сходить в зал'},
    {id: 3, title: 'Отжаться 25 раз'},
    {id: 4, title: 'Написать другу'},
    {id: 5, title: 'Помыть часть посуды', text: ''},
    {id: 5, title: 'Помыть всю посуду', text: ''},
    {id: 5, title: 'Вытереть стол', text: ''},
    {id: 5, title: 'Вытереть стол', text: ''},
    {id: 5, title: 'Удалить ненужный хлам с телефона', text: ''},
    {id: 5, title: 'Прочитать что такое {object}', text: ''},
    {id: 5, title: 'Посмотреть видео про {object}', text: ''},
    {id: 5, title: 'Пройти тест по {object}', text: ''},
]

app.get('/cards', async function (request, response) {
    response.json(actions);
});