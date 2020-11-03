const Joi = require('joi');

function userValidation(user) {
  const schema = Joi.object({
    username: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().min(3).max(255).required(),
    password: Joi.string().min(3).max(1024).required(),
    gender: Joi.string().min(3).max(255).required(),
    image: Joi.string(),
  })
  return schema.validate(user);
};

exports.userValidation = userValidation;