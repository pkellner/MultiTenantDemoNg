'use strict';

function HomeController ($scope,speakers) {



   console.log('homecontroller');

   this.speakers = speakers;



   //console.log('speakers.length: ' + $scope.speakers.length);

}

HomeController.$inject = ['$scope','speakers'];

module.exports = HomeController;