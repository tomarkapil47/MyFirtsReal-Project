const bcrypt = require('bcryptjs');
const securePassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hasedPassed = bcrypt.hash(password, salt);
  return hasedPassed;
};

const matchPassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log('Error', error);
    return false;
  }
};

module.exports = { securePassword, matchPassword };
