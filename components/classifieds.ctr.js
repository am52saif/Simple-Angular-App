(function(){
  "use strict";
  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl",function($scope){
      $scope.name = {
        first: "Ali Asgar",
        last: "Merchant"
      };
    });
})();
