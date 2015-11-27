function SessionController ($scope,sessions) {
   console.log('sessioncontroller');
   this.sessions = sessions;
   console.log('sessioncontroller: ' + this.sessions.length);
}


SessionController.$inject = ['$scope','sessions'];

module.exports = SessionController;