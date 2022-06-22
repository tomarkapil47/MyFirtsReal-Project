const {
  Schema,
  Types: { ObjectId },
  model,
} = require('mongoose');

const FileDataSchema = new Schema(
  {
    uploaded_by: {
      type: ObjectId,
      ref: 'User',
    },
    device: {
      type: String,
      default: 'WEB',
    },
    data: {
      type: Object,
      require: true,
    },
    uploadedFileType: {
      type: String,
      required: true,
    },
    convertedFileType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('uploadedFiles', FileDataSchema);
