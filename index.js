const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
    host: 'node32226-env-0882402.rag-cloud.hosteur.com',
    user: 'webadmin',
    password: 'ERIdna63215',
    database: 'test-nodejs',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

app.get('/users', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users');
    res.json(rows);
});
app.get('/users/:name', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users WHERE name = $1', [req.params.name]);
    res.json(rows);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});
app.get('/test2', (req, res) => {
    res.sendFile(__dirname + '/test2.html');
});




app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
