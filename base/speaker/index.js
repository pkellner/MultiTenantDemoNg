function SpeakerService($http, $q) {
    this.fetchAll = function () {
        var defer = $q.defer(); $http.get('/rest/speaker',{cache: true}).success(function (speakers) {
            defer.resolve(speakers);
        })
       .error(function (speakers) {
            console.log('rest speaker error');
        });
        return defer.promise;
    }
}
SpeakerService.$inject = ['$http', '$q'];

module.exports = SpeakerService;