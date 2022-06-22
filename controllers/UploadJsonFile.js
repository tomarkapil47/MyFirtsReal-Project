const { upload } = require('../middleware/Files');
const UploadFile = require('../db/models/UploadJsonFileData');

const UploadScanFile = async (req, res, next) => {
  upload('./public/dataUploadedFile')(req, res, async (err) => {
    if (err) {
      res.status(401).json({ message: ' Something Went Wrong!!' });
      return false;
    }
    if (!req.file) {
      res.status(404).json({ message: 'File not found!' });
      return false;
    }
    const file = req.file;
    const jsonFile = new UploadFile({
      file: file.path,
    });
    const savedFile = await jsonFile.save();
    res.json(savedFile);
    console.log(savedFile);
  });
};

module.exports = { UploadScanFile };
