(function() {
  angular
    .module('movieModule', [])
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];
  function routeConfig($routeProvider) {
    $routeProvider
      .when('/movie/:id', {
        templateUrl: './movie/movie.html',
        controller: 'movieCtrl'
      });
  }
})();