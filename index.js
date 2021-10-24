const express = require('express');
const morgan = require('morgan');
const colors = require('colors');

const sendMSM = require('./routes/sendSMS');
const checkPhone = require('./routes/checkPhone');
const typeSMS = require('./routes/smsType');

const app = express();
const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`.blue);
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/smsExample', sendMSM);
app.use('/smsExample', checkPhone);
app.use('/smsExample', typeSMS);