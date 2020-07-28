var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;


//Added public key to config.js file (week2)
config.web.secret = "topsecret"

