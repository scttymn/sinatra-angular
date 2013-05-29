function ThingController($scope, $http) {
  var baseUrl = 'http://sinatra-api.herokuapp.com';
  
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
    var idx = $scope.things.indexOf(thing);

    $http.delete(baseUrl + '/things/' + thing.id + '/delete').success(function(success){
      $scope.things.splice(idx,1);
    });
  }
  
}