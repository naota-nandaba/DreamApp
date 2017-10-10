module.exports = Base =>
  class extends Base {
    static all(cond = {}) {
      return this.transact((trx) =>
        this.table()
          .where(cond)
          .transacting(trx)
          .then((rows) => rows.map(this.new.bind(this)))
      );
    }
    static find(id) {
      return this.transact((trx) => this.all({id}));
    }
    static create(params) {
      return this.transact((trx) =>
         this.validateBefore(params)
          .then((value) => this.table().insert(value, '*').transacting(trx))
          .then(this.new.bind(this))
      )
    }
    static update(item, params) {
      return this.transact((trx) =>
        this.validateBefore(params)
          .then((value) =>
            this.table().where(item).update(value, '*').transacting(trx)
          )
          .then(this.new.bind(this))
      )
    }
    static destroy(item) {
      return this.transact((trx) =>
        this.table().where(item).transacting(trx).del()
      );
    }
    static validateBefore(params) {
      return new Promise((resolve, reject) => {
        this.validator.validate(params, this.schema, (err, value) => {
          if (err) { reject(err) }

          resolve(value);
        })
      })
    }
    static transact(action) {
      return this.db.transaction((trx) => {
        action(trx)
          .then(trx.commit)
          .catch(trx.rollback)
      })
    }
    static table() {
      return this.db(this.tableName)
    }
    static new(row) {
      const resource = row instanceof Array ? row[0] : row;

      return new this(resource);
    }
  }
