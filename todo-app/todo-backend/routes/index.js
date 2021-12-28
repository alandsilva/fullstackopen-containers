const express = require('express');
const router = express.Router();

const configs = require('../util/config');

const redis = require('../redis');
let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get('/statistics', async (_, res) => {
  const count = await redis.getAsync('count');
  res.send({
    added_todos: count,
  });
});

module.exports = router;
