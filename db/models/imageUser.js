const mongoose = require('mongoose');
const ImageUserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('imageuser', ImageUserSchema);
