(function() {
  angular
    .module('movieSearchModule')
    .controller('movieSearchCtrl', movieSearchCtrl);

  movieSearchCtrl.$inject = ['$scope', 'movieSearchService'];
  function movieSearchCtrl($scope, movieSearchService) {
    $scope.movieTitle = 'star wars';
    $scope.movieYear = null;
    $scope.isFullPlot = false;
    $scope.movieList = [];

    $scope.findMovie = function() {
      movieSearchService
        .handleUserAction($scope.movieTitle, $scope.movieYear, $scope.isFullPlot)
        .then(function(response) { 
          $scope.movieList = response.data.Search;
          console.log($scope.movieList);
        })
        .catch(function(error) {
          console.log(error);
        })
    }    
  }
})();