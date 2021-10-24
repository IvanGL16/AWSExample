const express = require('express');
const route = express.Router();
const check = require('../controller/check');

route.post('/check', (req, res) => {
    check.check(req.body.phone).then((data) => {
        res.status(200).send("Phone Opt Out is " + data.isOptedOut);
    }).catch((err) => {
        res.status(500).send(err, err.stack);
    })
})

module.exports = route