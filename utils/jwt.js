const JWT = require('jsonwebtoken');
module.exports.signToken = (value = {}) => {
  const response = { token: '', error: null };
  try {
    response.token = JWT.sign(value, process.env.JWT_SEC, {
      expiresIn: '120d',
    });
  } catch (error) {
    console.log('while generating token', error.message);
    response.error = error;
  }
  return response;
};
