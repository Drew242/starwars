angular.module('starWars', ['ngRoute']);

// Routes //

angular.module('starWars').config(function($routeProvider) {
    $routeProvider.when( '/', {
      templateUrl: 'main.html'
    });
    $routeProvider.when( '/createCharacter', {
      templateUrl: 'createCharacter.html'
    })

    // default route //
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
});
