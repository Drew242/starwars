angular.module('starWars', ['ngRoute']);

// Routes //

angular.module('starWars').config(function($routeProvider) {
    $routeProvider.when( '/', {
      templateUrl: 'views/main.html'
    });
    $routeProvider.when( '/createCharacter', {
      templateUrl: 'views/createCharacter.html'
    })
    $routeProvider.when( '/yodaAdvice', {
      templateUrl: 'views/yodaAdvice.html'
    })
    $routeProvider.when( '/leaveGalaxy', {
      templateUrl: 'views/leaveGalaxy.html'
    })

    // default route //
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
});

// Input Factory //

angular.module('starWars')
    .factory('InputFactory', [
        '$http',
        inputFactory
    ]);

function inputFactory($http) {
    var starWarsData = {
        getData: function (URL) {
            return $http.get(URL);
        }
    };

    return starWarsData;
}

// Input Controller //

angular.module('starWars')
    .controller('InputController', [
        'InputFactory',
        inputController
    ]);

// Declare controller function //

function inputController(InputFactory) {
    console.log('Controller functional, human.');
    var ic = this;
    var inputFact = InputFactory;
    ic.species  = '';
    ic.planet   = '';
    ic.starship = '';

    ic.ajaxCall = function(URL) {
            inputFact.getData(URL).then(function (response) {
            ic.appData = response;
            console.log('response is: ' + response);
            // this should be the entire string of each object type that's
            // called based upon the user inputs
            // now we need a function to sift through to find the object itself
            // by name of user input and isolate that object, and push into a master
            // array for building and showing the view
        })
    };
    inputFact.species = ic.ajaxCall('http://swapi.co/api/species/');
    inputFact.planet = ic.ajaxCall('http://swapi.co/api/planets/');
    inputFact.starship = ic.ajaxCall('http://swapi.co/api/starships');

    inputFact.inputSearch = function(userInput, type) {
        switch(userInput) {
            case 'planet':

        }
    }

    ic.go = function(e) {
      console.log(e)
    }
}
