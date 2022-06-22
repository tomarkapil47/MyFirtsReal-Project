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
var router = express.Router();

// scan data formate router

router.post('/file', verifyToken, scanDataFileFormate);

router.post('/exceldatafile', verifyToken, DataFormatFile);
// router.get('/noderoute', verifyToken, NodeJsConnectWithSAP);
// router.get('/express', verifyToken, NodeJsConnectSAP);

module.exports = router;
