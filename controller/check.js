const AWS = require('aws-sdk');
const AWServices = require('../libs/AWServices');
const config = require('config');

AWServices.region();
AWServices.credentials();

const checkOut = (phone) => {
    return phonenumPromise = new AWS.SNS({apiVersion: config.get('apiVersion')}).checkIfPhoneNumberIsOptedOut({phoneNumber: phone}).promise();
}

exports.check = checkOut;