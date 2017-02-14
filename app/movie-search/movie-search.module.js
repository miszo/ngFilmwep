(function() {
  angular
    .module('movieSearchModule', [])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
      $routeProvider
        .when('/search', {
          templateUrl: './movie-search/movie-search.html',
          controller: 'movieSearchCtrl'
        });
    }
})();