const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const testData = require('./routes/testData');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
    origin: [
        "http://localhost",
        "http://localhost:3000",
    ]
}

app.use(cors(corsOptions))

app.use('/testData', testData);

//Last middleware -> nothing else dealt with this request -> 404 -> we show 403 for security reasons
app.use(function (req, res) {
    res.sendStatus(403)
})

module.exports = app;
