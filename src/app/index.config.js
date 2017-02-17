(function() {
  'use strict';
  angular
    .module('formioApp')
    .config([
      'AppConfig',
      'FormioProvider',
      'FormioAuthProvider',
      'formioComponentsProvider',
	 '$translateProvider',
      '$locationProvider',
      function(
        AppConfig,
        FormioProvider,
        FormioAuthProvider,
        formioComponentsProvider,
       $translateProvider, 
	 $locationProvider
      ) {
        $locationProvider.hashPrefix('');
        FormioProvider.setAppUrl(AppConfig.appUrl);
        FormioProvider.setBaseUrl(AppConfig.apiUrl);
        FormioAuthProvider.setForceAuth(true);
        FormioAuthProvider.setStates('auth.login', 'home');
        FormioAuthProvider.register('login', 'user', 'login');

        // Add a new group to formioComponentsProvider.
        formioComponentsProvider.addGroup('custom', {title: 'Custom Components'});
	   //translation

// i18n SETTINGS
  
  // Tell translateProvider what translation file names to look for
  // Used by $translateProvider.useStaticFilesLoader()
  var fileNameConvention = {
    prefix: 'locale-',
    suffix: '.json'
  };



		var langMap = {
      'en_AU': 'en',
      'en_CA': 'en',
      'en_NZ': 'en',
      'en_PH': 'en',
      'en_UK': 'en',
      'en_US': 'en',
      'zh_CN': 'zh'
  };

  $translateProvider
    .useStaticFilesLoader(fileNameConvention)
    .registerAvailableLanguageKeys(['en','zh'], langMap)
	.preferredLanguage("zh")
	.useStaticFilesLoader({
            prefix: "app/resources/locale-",
            suffix: ".json"
        })
    //.determinePreferredLanguage() // Get the user's system language
    .fallbackLanguage(['zh']) // If their system uses a lang we don't support, fall back to this lang
    .useCookieStorage() // Store the user's lang preference
    .useSanitizeValueStrategy('sanitizeParameters'); // Prevent hacking of interpoloated strings	
	
      }
    ]);
})();
