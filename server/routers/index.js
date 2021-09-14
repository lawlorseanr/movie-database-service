const router = require('express').Router();
const { movies, shows } = require('../controllers');

/* ========================
        /api
======================== */

// movies
router
  .get('/movies', movies.get)

// shows
router
  .get('/shows', shows.get)

module.exports = router;
