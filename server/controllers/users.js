const User = require('../../database/models/user');
const Session = require('../../database/models/session');
module.exports = {
  post: (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username })
      .then((userResponse) => {
        if (userResponse === null || userResponse.password !== password) {
          res.status(401).json({ session: null });
        } else {
          const { token } = userResponse;
          Session.create({ token })
            .then((tokenResponse) => {
              res.status(201).json({ session: tokenResponse._id });
            })
            .catch((error) => {
              res.status(500).json({ error });
            })
        }
      })
      .catch((error) => {
        res.status(500).json({ error });
      })
  },
};
