const express = require('express');
const router = express.Router();
const knex = require('../knex.init');

router.get('/', async function(req, res, next) {
  const users = await knex({ table: 'users' })
    .select(['id', 'username']);

    console.log('\x1b[33m>>> users \x1b[33m', users);

  res.json({ hello: 'World' });
});

module.exports = router;
