// src/auth/index.js
import router from '../router';

// URL and endpoint constants
const API_URL = 'http://localhost:8000/';
const LOGIN_URL = API_URL + 'api-token-auth/';
const SIGNUP_URL = API_URL + 'users/';

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, { method: 'post' }).then(data => {
      this._setToken(data.body.token);

      this.user.authenticated = true;

      // Redirect to a specified route
      if (redirect) {
        router.push(redirect);
      }
    }, err => {
      console.error(err);
      context.error = err;
    });
  },

  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      this._setToken(data.token);

      this.user.authenticated = true;

      if (redirect) {
        router.push(redirect);
      }
    }).error((err) => {
      context.error = err;
    });
  },

  // To log out, we just need to remove the token
  logout () {
    localStorage.removeItem('token');
    this.user.authenticated = false;
  },

  checkAuth () {
    let jwt = this._getToken();
    this.user.authenticated = !!jwt;
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    let token = this._getToken();
    return {
      'Authorization': token ? 'Token ' + token : ''
    };
  },

  _getToken () {
    return localStorage.getItem('token');
  },

  _setToken (token) {
    return localStorage.setItem('token', token);
  }

};
