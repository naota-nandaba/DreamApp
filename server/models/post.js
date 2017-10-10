const Joi = require('joi');
const db  = require('../db');
const Base = require('./base');

Base.config({db});

class Post extends Base.having({
  tableName: 'posts',
  validator: Joi.object().keys({
    id: Joi.number().integer(),
    body: Joi.string().min(1).max(15000),
    user_id: Joi.number().integer(),
    updated_at: Joi.date().timestamp(),
    created_at: Joi.date().timestamp()
  })
}) {
  constructor(params) {
    super(params)
    if(!this.error) {
      Object.assign(this, params)
    }
  }
}
module.exports = Post;
