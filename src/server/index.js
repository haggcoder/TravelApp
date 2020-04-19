var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* app.use(express.static('src/client')); */
app.use(express.static('dist'));

app.get('/', function (req, res) {
    /* res.sendFile('/client/views/index.html', { root: __dirname + '/..' }) */
    res.sendFile('dist/index.html');
});

const server = app.listen(PORT, ()=>{
    console.log(`Running on localhost: ${PORT}`);
});