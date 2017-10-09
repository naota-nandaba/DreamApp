const Joi = require('joi');
const TableActions = require('./actions');

class Base {
  static table() {
    return this.db(this.tableName)
  }
  static new(row) {
    const resource = row instanceof Array ? row[0] : row;

    return new this(resource);
  }
  static having(props) {
    const mixin = class extends this {};

    return Object.assign(mixin, props);
  }
  static config({validator, db}) {
    this.validator = validator || Joi.object();
    this.db = db;
  }
  constructor(params) {
    const {error} = this.constructor.validator.validate(params);
    this.error = error;
  }
}
module.exports = TableActions(Base);
