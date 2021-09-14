const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  token: String,
})

const User = mongoose.model('Session', sessionSchema);

module.exports = User;
