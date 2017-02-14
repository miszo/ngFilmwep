(function() {
  angular
    .module('movieModule')
    .controller('movieCtrl', movieCtrl);

  movieCtrl.$inject = ['$scope'];
  function movieCtrl($scope) {
    console.log($routeProvider);
  }
})();