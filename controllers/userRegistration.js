const User = require('../db/models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');
const { securePassword, matchPassword } = require('../utils/securedPassword');
const { LoginValidator } = require('../utils/userValidate');
const { signToken } = require('../utils/jwt');

const Signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    })
      .lean(true)
      .select('-password -createdAt -updatedAt -__v ');
    if (existingUser) {
      res.status(403);
      return res.status(422).json({ message: 'User Already Exists' });
    } else {
      const hashedPassword = await securePassword(req.body.password);
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      if (newUser) {
        res.status(201);
        return res.json({
          message: 'User registration Succesfully Done!', //we can pass newUser here like this(false,"user created",newUser)
        });
      } else {
        res.status(403);
        return res.status(400).json({
          message: 'Error Creating User',
        });
      }
    }
  } catch (error) {
    res.status(400);
    console.log(error);
    return res.status(400).json({
      message: 'Error Adding user',
    });
  }
};

const login = async (req, res, next) => {
  const { value, error } = LoginValidator(req.body);
  if (error) return status400(res, error);

  const user = await User.findOne({ email: value.email });
  if (!user)
    return res.status(400).json({ message: 'Invalid username or password' });

  // password match
  const passwordMatched = await matchPassword(value.password, user.password);
  // if not match error response
  if (!passwordMatched)
    return res.status(400).json({ message: 'Invalid username or password' });

  // if matched token refresh token
  // const token = v4();
  const token = signToken({
    id: user._id,
    email: user.email,
  });

  res.status(200).json({
    status: 'Login Successfully',
    token,
  });
};

module.exports = { Signup, login };
