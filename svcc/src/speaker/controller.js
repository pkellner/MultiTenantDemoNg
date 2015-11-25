function SpeakerController ($scope,speakers) {
   console.log('speakercontroller');
   this.speakers = speakers;
   console.log('speakercontroller: ' + this.speakers.length);
}


SpeakerController.$inject = ['$scope','speakers'];

module.exports = SpeakerController;