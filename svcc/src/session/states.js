'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('speaker', {
        url: '/speaker',
        //url: '/',
        templateUrl: '/templates/speaker/speaker.html',
        controller: 'SpeakerController',
        controllerAs: 'speaker'
    });
};
exports.$inject = ['$stateProvider'];
