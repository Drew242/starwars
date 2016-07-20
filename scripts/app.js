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

    return starWarsData
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

    ic.ajaxCall = function(URL, prop) {
            inputFact.getData(URL).then(function (response) {
            inputFact[prop] = response.data.results;
            console.log('help', response.data);
        })
    };
    ic.ajaxCall('http://swapi.co/api/species/', 'species');
    ic.ajaxCall('http://swapi.co/api/planets/', 'planets');
    ic.ajaxCall('http://swapi.co/api/starships', 'starships');

    inputFact.inputSearch = function(userInput, type) {
        switch(userInput) {
            case 'planet':
        }
    }

    ic.go = function() {
      console.log(inputFact.species);
      // species info //
      ic.class = inputFact.species[0].classification;
      ic.life  = inputFact.species[0].average_lifespan;
      ic.lang  = inputFact.species[0].language;
      // planet info //
      ic.climate = inputFact.planets[0].climate;
      ic.gravity = inputFact.planets[0].gravity;
      ic.terrain = inputFact.planets[0].terrain;
      // starship info //
      ic.shipClass  = inputFact.starships[0].starship_class;
      ic.shipLength = inputFact.starships[0].length;
      ic.shipCrew   = inputFact.starships[0].crew;
    }
}
