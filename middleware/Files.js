const multer = require('multer');
const fileExtension = require('file-extension');
const crypto = require('crypto');
const storage = multer.diskStorage({
  destination: './public/dataJsonFile',
  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(
        null,
        raw.toString('hex') + Date.now() + '.' + fileExtension(file.mimetype)
      );
    });
  },
});

module.exports.upload = (destination = './public/dataJsonFile') => {
  const storage = multer.diskStorage({
    destination,
    filename: (req, file, cb) => {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        cb(
          null,
          raw.toString('hex') + Date.now() + '.' + fileExtension(file.mimetype)
        );
      });
    },
  });
  return multer({
    storage: storage,
  }).single('file');
};
