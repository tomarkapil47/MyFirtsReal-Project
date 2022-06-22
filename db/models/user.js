var mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
var userSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: false,
      unique: true,
      required: [true, "can't be blank"],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      min: 7,
      required: [true, 'Please provide a password'],
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);
module.exports = User;
