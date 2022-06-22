var express = require('express');
const {
  scanDataFileFormate,
  DataFormatFile,
} = require('../controllers/dataFileConversion');
const {
  NodeJsConnectWithSAP,
  NodeJsConnectSAP,
} = require('../controllers/SAPConnection');
const { verifyToken } = require('../middleware/Authenticate');
const { UploadScanFile } = require('../controllers/UploadJsonFile');
var router = express.Router();

// scan data formate router

router.post('/file', verifyToken, scanDataFileFormate);
router.post('/exceldatafile', verifyToken, DataFormatFile);
router.post('/getSacnData', UploadScanFile);
// router.get('/noderoute', verifyToken, NodeJsConnectWithSAP);
// router.get('/express', verifyToken, NodeJsConnectSAP);

module.exports = router;
