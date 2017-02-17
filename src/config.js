var APP_URL = 'http://35.161.117.208:3005';
var API_URL = 'http://35.161.117.208:3005';

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

APP_URL = query.appUrl || APP_URL;
API_URL = query.apiUrl || API_URL;

angular.module('formioApp').constant('AppConfig', {
  appUrl: APP_URL,
  apiUrl: API_URL,
  forms: {
    userLoginForm: APP_URL + '/user/login'
  },
  resources: {
    user: {
      form: APP_URL + '/user',
      resource: 'UserResource'
    }
  }
});
