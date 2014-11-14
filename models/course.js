'use strict'

var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  courseName: String,
  city: String,
  state: String,
  numHoles: Number
});

module.exports = mongoose.model('Course', courseSchema);
