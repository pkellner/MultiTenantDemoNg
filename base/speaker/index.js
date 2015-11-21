function SpeakerService($http, $q) {
    this.fetchAll = function () {
        var defer = $q.defer();
        $http.get('/rest/speaker').success(function (speakers) {
            for (i = 0; i < speakers.length; i++) {
                speakers[i].speakerImageUrl = "https://www.siliconvalley-codecamp.com/attendeeimage/" +
                    speakers[i].id + ".jpg";
            }
            defer.resolve(speakers);
        }).error(function (speakers) {
            console.log('rest speaker error');
        });
        return defer.promise;
    }
}
SpeakerService.$inject = ['$http', '$q'];

module.exports = SpeakerService;