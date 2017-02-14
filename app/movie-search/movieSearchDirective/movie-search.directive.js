(function() {
  angular
    .module('movieSearchModule')
    .directive('movieSearch', movieSearch);

  function movieSearch() {
    var configObj = {
      scope: {
        movie: '='
      },
      templateUrl: './movie-search/movieSearchDirective/movie-search.directive.html' 
    };
    return configObj;    
  }
})();