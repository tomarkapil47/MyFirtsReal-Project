const mongoose = require('mongoose');
var url = process.env.NODE_ENV
  ? process.env.DB_CONNECT
  : 'mongodb://localhost:27017/booksDB';
const connection = mongoose.createConnection(url);

module.exports = connection;
