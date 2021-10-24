const AWS = require('aws-sdk');
const AWServices = require('../libs/AWServices')
const config = require('config');

AWServices.region();
AWServices.credentials();

const mensajeData = (message, phone) => {
    var params = {
        Message: message,
        PhoneNumber: phone
    };
    return publishSMS = new AWS.SNS({ apiVersion: config.get('apiVersion') }).publish(params).promise();
}

exports.send = mensajeData;