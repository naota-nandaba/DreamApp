const request = require('request-promise');
const BASIC = 'Basic ';

class Client {
  constructor({username, password, uri}) {
    this.username = username;
    this.password = password;
    this.uri  = uri;
  }
  with(config) {
    const params = Object.assign({}, this, config);

    return new this.constructor(params);
  }
  posts(query) {
    return this.run('GET', { path: '/posts', query: query, skipAuth: true});
  }
  createPost(post) {
    return this.run('POST', { path: '/posts'}, post);
  }
  run(method, resource, body) {
    return request({
      method: method,
      qs: resource.query,
      uri: this.uri.concat(resource.path),
      headers: resource.skipAuth,
      body: body,
      json: true
     })
  }

}

module.exports = Client;
