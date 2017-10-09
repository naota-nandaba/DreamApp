import Base form './base';

class User extends Base {
  static find(db, {id}) {
    return db
      .select()
      .from('users')
      .where({id})
      .first()
      .then((resource) => new User(resource));
  }
  constructor(params) {
    super(params);

    this.id = params.id;
    this.email = params.email;
    this.hashed_password = params.hashed_password;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }
}
