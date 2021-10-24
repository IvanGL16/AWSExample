const express = require('express');
const route = express.Router();
const send = require('../controller/send');

route.post('/send', (req, res) => {
    send.send(req.body.message, req.body.phone).then((data) => {
        res.status(200).send("MessageID is " + data.MessageId);
    }).catch((err) => {
        res.status(500).send(err, err.stack);
    });
})


module.exports = route