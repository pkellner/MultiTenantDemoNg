function SpeakerController ($scope,speakers) {
   this.speakers = speakers;
}


SpeakerController.$inject = ['$scope','speakers'];

module.exports = SpeakerController;

