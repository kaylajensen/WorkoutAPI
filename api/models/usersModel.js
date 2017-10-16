'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Kindly enter the username of the user'
  },
  firstName: {
    type: String,
    required: 'Kindly enter the first name of the user'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the last name of the user'
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone number of the user'
  },
  workoutCount: {
    type: Number,
    required: 'Kindly enter the poopCount of the user'
  },
  allTimeWorkoutCount: {
    type: Number,
    required: 'Kindly enter the allTimePoopCount of the user'
  },
  currentDay: {
    type: String,
    required: 'Kindly enter the currentDay for the user'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
