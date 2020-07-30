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

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.geyById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

/** Database queries */