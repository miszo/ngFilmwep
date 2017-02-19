(function() {
  angular
    .module('movieSearchModule')
    .controller('movieSearchCtrl', movieSearchCtrl);

  movieSearchCtrl.$inject = ['$scope', '$location', 'toastr', 'movieSearchService'];
  function movieSearchCtrl($scope, $location, toastr, movieSearchService) {
    $scope.movieTitle = null;
    $scope.movieYear = null;
    $scope.movieList = [];

    $scope.clearSearch = function() {
      $scope.movieTitle = null;
      $scope.movieYear = null;
    }

    $scope.findMovie = function() {
      movieSearchService
        .fetchMoviesList($scope.movieTitle, $scope.movieYear)
        .then(function(response) { 
          $scope.movieList = response.data.Search;
        })
        .catch(function(error) {
          toastr.error(error, 'Error');
        });
    }

    $scope.navigateToMovie = function(id) {
      $location.url('/search/' + id);
    }
  }
})();