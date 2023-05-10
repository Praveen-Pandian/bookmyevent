var admin = require("firebase-admin");
require('dotenv').config();

var serviceAccount = require("./serviceAccount.json");

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = firebase