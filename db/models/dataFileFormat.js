const mongoose = require('mongoose');

const DataFileSchema = new mongoose.Schema(
  {
    Region: {
      type: String,
      default: '-----',
    },
    City: {
      type: String,
      default: '----',
    },
    Categories: {
      type: String,
      default: '----',
    },
    Product: {
      type: String,
      default: '----',
    },
    Quantity: {
      type: Number,
      default: '----',
    },
    UnitPrice: {
      type: Number,
      default: '----',
    },
    TotalPrice: {
      type: Number,
      default: '------',
    },
  },
  { timestamps: true }
);

const dataModel = mongoose.model('dataFile', DataFileSchema);
module.exports = dataModel;
