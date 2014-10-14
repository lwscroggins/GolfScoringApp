'use strict'

var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
  basic: {
    name: String,
    city: String,
    state: String,
    length: Number
  }
});

module.exports = mongoose.model('Course', courseSchema);
