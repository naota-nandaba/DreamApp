const Client = require('../../../client');

const API_URI = 'http://localhost:8000/api';

module.exports = {
  isLoggedIn: function () {
    return Boolean(this.getCredentials());
  },

  createClient: function (credentials) {
    return this.newClient(credentials || this.getCredentials() || {});
  },

  newClient: function (credentials) {
    return new Client({ uri: API_URI}).with(credentials);
  },

  getCredentials: function (credentials) {
    return this.getApp().credentials || credentials;
  },

  storeCredentials: function (credentials) {
    return this.updateApp({credentials});
  },
  
  removeCredentials: function () {
    return this.updateApp({credentials: null});
  },

  updateApp: function (change) {
    sessionStorage.setItem(
      'app',
      JSON.stringify(Object.assign(this.getApp(), change))
    )

    return this;

  },
  getApp: function () {
    return JSON.parse(sessionStorage.getItem('app')) || {};
  }

}
