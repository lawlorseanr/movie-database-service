const router = require('express').Router();
const { users } = require('../controllers');

/* ========================
        /validate
======================== */

router
  .post('/', users.post);

module.exports = router;
