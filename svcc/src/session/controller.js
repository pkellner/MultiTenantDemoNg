function SessionController ($scope,sessions) {
   this.sessions = sessions;
}


SessionController.$inject = ['$scope','sessions'];

module.exports = SessionController;