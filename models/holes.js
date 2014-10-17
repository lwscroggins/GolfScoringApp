'use strict'

var mongoose = require('mongoose');

var holeSchema = mongoose.Schema({
  basic: {
    coursename: String,
    number: String,
    par: Number
  }
});

module.export = mongoose.model('Holes', holeSchema);
