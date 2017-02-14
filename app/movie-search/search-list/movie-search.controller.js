(function() {
  angular
    .module('movieSearchModule')
    .controller('movieSearchCtrl', movieSearchCtrl);

  movieSearchCtrl.$inject = ['$scope', '$location', 'movieSearchService'];
  function movieSearchCtrl($scope, $location, movieSearchService) {
    $scope.movieTitle = 'star wars';
    $scope.movieYear = null;
    $scope.movieList = [];

    $scope.findMovie = function() {
      movieSearchService
        .fetchMoviesList($scope.movieTitle, $scope.movieYear)
        .then(function(response) { 
          $scope.movieList = response.data.Search;
        })
        .catch(function(error) {
          console.log(error);
        })
    }

    $scope.navigateToMovie = function(id) {
      $location.url('/search/' + id);
    }
  }
})();