'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('session', {
        url: '/session',
        //url: '/',
        templateUrl: '/templates/session/session.html',
        controller: 'SessionController',
        controllerAs: 'session',
        resolve: {
            sessions: getSessions
        }
    });
};
exports.$inject = ['$stateProvider'];

function getSessions (Session) {
    return Session.fetchAll();
}
getSessions.$inject = ['Session'];
