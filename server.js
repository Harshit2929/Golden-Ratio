'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

function updateDatabase(data) {
    //   ... // update the database
    return newValue;
}

app.use(express.static('public'));
app.post('/updatestate', (req, res) => {
    const newValue = updateDatabase(res.body);
    res.json(newValue);
});

app.get('/api/v1/test', (req, res) => {
    res.status(400).json({
        message: "Success"
    })
})

module.exports.handler = serverless(app);