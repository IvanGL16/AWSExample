const AWS = require('aws-sdk');
const AWServices = require('../libs/AWServices');
const config = require('config');

AWServices.region();
AWServices.credentials();

const getType = () => {
    var params = {
        attributes: [
            'DefaultSMSType'
        ]
    };
    return type = new AWS.SNS({ apiVersion: config.get('apiVersion') }).getSMSAttributes(params).promise();
}

const setType = (type) => {
    console.log(type);
    var params = {
        attributes: {
            'DefaultSMSType': type
        }
    };
    console.log(params);
    return set = new AWS.SNS({ apiVersion: config.get('apiVersion') }).setSMSAttributes(params).promise();
}

exports.set = setType;
exports.get = getType;