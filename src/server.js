const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'tourmerch'
  });
  
  connection.connect();

const app = express()
.use(cors())
.use(bodyParser.json())
.use(events(connection));

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/TourMerch'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));