function SessionService($http, $q) {
    this.fetchAll = function () {
        var defer = $q.defer(); $http.get('/rest/session',{cache: true}).success(function (sessions) {
            sessions.map(function(session){
                //session.speakerImageUrl = "https://www.siliconvalley-codecamp.com/attendeeimage/" +
                //    speaker.id + ".jpg";
            });
            defer.resolve(sessions);
        })
       .error(function (sessions) {
            console.log('rest session error');
        });
        return defer.promise;
    }
}
SessionService.$inject = ['$http', '$q'];

module.exports = SessionService;