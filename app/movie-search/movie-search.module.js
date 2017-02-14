(function() {
  angular
    .module('movieSearchModule', [])
    .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];
    function routeConfig($routeProvider) {
      $routeProvider
        .when('/search', {
          templateUrl: './movie-search/search-list/movie-search.html',
          controller: 'movieSearchCtrl'
        })
        .when('/search/:id', {
        templateUrl: './movie-search/movie-detail/movie-detail.html',
        controller: 'movieDetailCtrl'
      });
    }
})();