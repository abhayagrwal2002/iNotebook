const mongoose = require('mongoose');
const { Schema } = mongoose;
// const router = express.Router();
// const { body, validationResult } = require('express-validator');

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  const User =mongoose.model('user', UserSchema);
//   User.createIndexes();
  module.exports = User;