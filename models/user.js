const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 1024
  },
  gender: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  image: {
    type: String,
  },
})

const User = mongoose.model('User', userSchema);
module.exports = User;
