function SpeakerController ($scope,speakers) {
   console.log('speakercontroller');
   this.speakers = speakers;
}


SpeakerController.$inject = ['$scope','speakers'];

module.exports = SpeakerController;