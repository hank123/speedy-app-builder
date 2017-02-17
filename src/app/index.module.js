(function() {
  'use strict';
  angular
    .module('formioApp', [
      'ngSanitize',
      'ui.router',
      'ui.bootstrap',
      'ui.bootstrap.accordion',
      'ui.bootstrap.alert',
      'pascalprecht.translate',
	'ngCookies',
      'formio',
      'ngFormioHelper',
      'ngFormBuilder',
      'ngFormBuilderHelper'
    ]);
})();
