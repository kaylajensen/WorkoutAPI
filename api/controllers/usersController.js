'use strict';
var ObjectId = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.getUsers = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      res.send(err);
    }
    if (!users.length) {
      res.json({"success" : "No users currently in database."})
    } else {
      res.json(users);
    }
  });
};

exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.getUserByUsername = function(req, res) {
  let username = req.params.username;
  User.find({"username": username}, function(err, user) {
    if (err) {
      res.send(err);
    }
    if (!user.length) {
      res.json({"success" : "No user with username, " + username + ", currently in database."})
    } else {
      res.json(user);
    }
  });
};

exports.updateUser = function(req, res) {
  let username = req.params.username;
  let updatedUser = new User(req.body);
  User.findOneAndUpdate({"username": username}, req.body, {new: true}, function(err, user) {
    if (err) {
      res.send(err);
    }
    if(user === null) {
      res.json({"success" : "No user with username, " + username + ", currently in database."})
    } else {
      res.json(user);
    }
  });
};

exports.deleteUser = function(req, res) {
  let username = req.params.username;
  User.remove({"username": username}, function(err, user) {
    if(err) {
      res.send(err);
    }
    res.json({"success": "User " + username + " was successfully deleted"});
  });
};
