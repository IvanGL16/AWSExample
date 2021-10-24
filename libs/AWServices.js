const AWS = require('aws-sdk');
const config = require('config');

const setRegion = () => {
    AWS.config.update({ region: config.get('region') });
}

const setCredentials = () => {
    var credentials = new AWS.SharedIniFileCredentials({ profile: config.get('profile') });
    AWS.config.credentials = credentials;
}
exports.region = setRegion;
exports.credentials = setCredentials;
