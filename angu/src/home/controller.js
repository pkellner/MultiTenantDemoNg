'use strict';

function HomeController ($scope) {
   console.log('homecontroller');

   $scope.presenters = [{

   },{

   }];

}

HomeController.$inject = ['$scope'];

module.exports = HomeController;