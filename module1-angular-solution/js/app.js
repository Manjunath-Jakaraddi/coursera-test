(function () {
  'use strict'
  angular.module('MyApp',[])
  .controller('MyController',myDI);
  myDI.$inject=['$scope'];
  function myDI($scope) {
    $scope.msg="";
    $scope.message="";
    $scope.updatemsg=function () {
      var arrayofstring=$scope.msg.split(',');
      console.log(arrayofstring);
      if(arrayofstring.length==1&&$scope.msg==="")
      {
        $scope.message="Please enter data first";
      }
      else if(arrayofstring.length>3)
      {
        $scope.message="Too much!";
      }
      else
      {
        $scope.message="Enjoy!";
      }
    };
  }
})();
