const mongoose = require('mongoose');
const User = require('../models/user');

const seed = require('./user.json');

mongoose.connect('mongodb://localhost:27017/movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => User.create(seed))
  .then(() => console.log('User collection seeded.'))
  .then(() => mongoose.connection.close())
  .catch((error) => {
    console.log({ error });
  });
