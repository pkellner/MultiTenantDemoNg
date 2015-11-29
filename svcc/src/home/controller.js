'use strict';

function HomeController ($scope,speakers) {
   this.speakers = speakers;
}

HomeController.$inject = ['$scope','speakers'];

module.exports = HomeController;