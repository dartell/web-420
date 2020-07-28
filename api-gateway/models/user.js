/**
 Fields username, password, and email
 */

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: "",
    password: "",
    email: ""
});

module.exports = mongoose.model("User", userSchema);

/** Database queries */