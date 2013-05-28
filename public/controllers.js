function ThingController($scope, $http) {
  var baseUrl = 'http://sinatra-api-example.scottymoon.c9.io';
  
  $http.get(baseUrl + '/things').success(function(data) {
    $scope.things = data;
  });
  
  $scope.create = function(thing) {
    $http.post(baseUrl + '/things', thing).success(function(thing){
      $scope.things.unshift(thing);
      $scope.thing = null;
    });
  }
  
  $scope.delete = function(thing) {
    $http.delete(baseUrl + '/things/' + thing.id + '/delete').success(function(thing){
      $scope.things.splice(thing,1);
    });
  }
  
}