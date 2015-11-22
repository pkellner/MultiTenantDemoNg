'use strict';

function HomeController ($scope,speakers) {
   console.log('homecontroller');
   this.speakers = speakers;
}

HomeController.$inject = ['$scope','speakers'];

module.exports = HomeController;