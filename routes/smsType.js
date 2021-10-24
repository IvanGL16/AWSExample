const express = require('express');
const route = express.Router();
const type = require('../controller/type');

route.post('/type', (req, res) => {
    type.set(req.body.type).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send(err, err.stack);
    });
})

route.get('/type', (req, res) => {
    type.get().then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send(err, err.stack);
    });
})


module.exports = route;