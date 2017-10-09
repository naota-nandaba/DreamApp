const UNREGISTERED_TABLE = (name) => `Unregisted relation: ${name}`;

class Registry {
  constructor() {
    this.relations = {};
  }
  register(klass) {
    this.relations[klass.tableName] = klass;
  }
  fetch(tableName) {
    return Promise((resolve, reject) =>
      const klass = this.relations[tableName];

      klass ? resolve(klass) : reject(Error(UNREGISTERED_TABLE(tableName)))
    )
  }
}
