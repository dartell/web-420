var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

exports.user_register = function(req, res) {
    res.send("NOT IMPLEMENTED: User registration POST");
};

//Verify token on GET
exports.user_token = function(req, res) {
    res.send("NOT IMPLEMENTED: User token lookup GET");
};