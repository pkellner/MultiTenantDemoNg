'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('session', {
        url: '/session',
        //url: '/',
        templateUrl: '/templates/session/session.html',
        controller: 'SessionController',
        controllerAs: 'session'
    });
};
exports.$inject = ['$stateProvider'];
