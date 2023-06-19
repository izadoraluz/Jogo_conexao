const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const kenex = require('knex');

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'jogo_conexao.db';

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.static("./public/"));


let initialPath = path.join(__dirname, "public");
app.use(bodyParser.json());
app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
})

app.get('/game', (req, res) => {
    res.sendFile(path.join(initialPath, "game.html"))
})

app.listen(3000, (req, res) => {
    console.log(`Page server running at http://${hostname}:${port}/`);
})