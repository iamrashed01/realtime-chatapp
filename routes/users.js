const bcrypt = require('bcrypt');
const multer = require('multer');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

const upload = multer();

const User = require('../models/user');
const { userValidation } = require('../validations/userValidation');

router.post('/', upload.none(), async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) return res.status(400).json({
    message: error.details[0].message,
    success: false
  })

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({
    message: 'user already exist.',
    success: false
  })

  user = await new User(_.pick(req.body, ['_id', 'username', 'email', 'password', 'gender']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);
  await user.save();

  res.status(200).json({
    data: user,
    message: 'User created successfully',
    success: true
  });
})

module.exports = router;