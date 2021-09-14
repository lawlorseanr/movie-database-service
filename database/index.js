const mongoose = require('mongoose');
const User = require('./models/user');

const seed = require('./seed/user.json');

mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
