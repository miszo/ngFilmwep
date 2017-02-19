(function() {
  angular
  .module('movieSearchModule')
  .service('movieSearchService', movieSearchService);

  movieSearchService.$inject = ['$http', '$q', 'toastr'];
  function movieSearchService($http, $q, toastr) {
    var baseUrl = 'http://www.omdbapi.com/';
    this.fetchMoviesList = function(movieTitle, movieYear) {
      if (!movieTitle || movieTitle.length === 0) {
        toastr.error('Title was not provided', 'Error');
      }
      var configObj = {
        params: {
          s: movieTitle,
          y: movieYear
        }
      };
      
      return $http.get(baseUrl, configObj);
    }

    this.fetchMovieDetail = function(id) {
      var configObj = {
        params: {
          i: id,
          plot: 'full'
        }
      };

      return $http.get(baseUrl, configObj);
    }
  }
})();