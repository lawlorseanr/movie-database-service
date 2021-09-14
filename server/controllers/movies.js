const Session = require('../../database/models/session');
const API = require('../lib/API');

module.exports = {
  get: (req, res) => {
    const { query } = req.query;
    const session = req.body.Authorization;
    Session.findOne({ _id: session })
      .then((session) => {
        const { token } = session;
        API.get('/search/movie', {
          params: {
            query
          },
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then((response) => {
            res.status(200).json(response.data);
          })
          .catch((error) => {
            res.status(401).json({ error });
          })
      })
      .catch((error) => {
        res.status(500).json({ error });
      })
  }
}