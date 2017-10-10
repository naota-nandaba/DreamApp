const knex = require('../db');

module.exports = function (req, res, next) {
  req.knex = knex;

  next();
}
