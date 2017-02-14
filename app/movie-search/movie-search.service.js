(function() {
  angular
  .module('movieSearchModule')
  .service('movieSearchService', movieSearchService);

  movieSearchService.$inject = ['$http', '$q'];
  function movieSearchService($http, $q) {
    var baseUrl = 'http://www.omdbapi.com/';
    this.handleUserAction = function(movieTitle, movieYear, isFullPlot) {
      if (!movieTitle || movieTitle.length === 0) {
        return $q.reject('title not provided :(');
      }
      var configObj = {
        params: {
          s: movieTitle,
          y: movieYear
        }
      };
      
      return $http.get(baseUrl, configObj);
    }
  }
})();