'use strict'

var mongoose = require('mongoose');

var holeSchema = mongoose.Schema({
  basic: {
    number: String,
    par: Number
  }
});

module.export = mongoose.model('Holes', holeSchema);
