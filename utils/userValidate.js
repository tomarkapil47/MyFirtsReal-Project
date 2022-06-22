const Joi = require('joi');

module.exports.LoginValidator = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label('Email'),
    password: Joi.string().required().label('Password'),
  });

  return schema.validate(data, { abortEarly: false });
};
