(function() {
  angular
    .module('app', [
      'ngRoute',
      'movieSearchModule'
    ])
    .config(routeConfig);
    
    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: './home/home.html'
        });
      
      $routeProvider
        .otherwise({redirectTo: '/'});
    }
})();