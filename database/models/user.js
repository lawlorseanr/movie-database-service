const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  first: String,
  last: String,
  username: { type: String, unique: true },
  password: String,
  token: String,
})

const User = mongoose.model('User', userSchema);

module.exports = User;
