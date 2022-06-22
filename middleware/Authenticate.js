const jwt = require('jsonwebtoken');
const verifyToken = async (req, res, next) => {
  const authHeaders = req.headers.token;
  if (authHeaders) {
    const token = authHeaders.split(' ')[1];
    try {
      const verify = await jwt.verify(token, process.env.JWT_SEC);
      res.user = verify;
      return next();
    } catch (error) {
      return res.send({
        message: 'Error while verifying the Token,Token Has Expired',
      });
    }
  } else {
    return res.status(401).json('You are not Authorized !');
  }
};
module.exports = { verifyToken };
