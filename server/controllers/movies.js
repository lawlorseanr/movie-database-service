const API = require('../lib/API');

module.exports = {
  get: (req, res) => {
    const { query } = req.query;
    API.get('/search/movie', { params: { query } })
      .then((response) => {
        res.status(200).json(response.data);
      })
      .catch((error) => {
        res.status(401).json(error);
      })
  }
}