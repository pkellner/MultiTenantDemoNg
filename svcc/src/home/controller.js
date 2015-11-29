'use strict';

function HomeController ($scope,speakers,configData) {
   this.speakers = speakers;

   this.showSpeakers = configData.showSpeakers === "True";

   debugger;
   //this.showSpeakers = false;


}

HomeController.$inject = ['$scope','speakers','configData'];

module.exports = HomeController;