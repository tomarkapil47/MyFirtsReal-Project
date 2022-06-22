const { array } = require('joi');
const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  file: {
    type: Array,
    required: [true, 'please upload the json file'],
  },
});

module.exports = mongoose.model('jsondata', imageSchema);
