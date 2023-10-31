const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});



app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
