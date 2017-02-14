(function() {
  angular
    .module('movieSearchModule')
    .controller('movieDetailCtrl', movieDetailCtrl);

  movieDetailCtrl.$inject = ['$scope', '$routeParams', 'movieSearchService'];
  function movieDetailCtrl($scope, $routeParams, movieSearchService) {

    function showMovie() {
      movieSearchService
        .fetchMovieDetail($routeParams.id)
        .then(function(response) {
          $scope.movie = response.data;
          console.log(response.data);
        });
    }
    showMovie();
  }
})();