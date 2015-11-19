'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('speaker', {
        //url: '/speaker',
        url: '/',
        templateUrl: '/templates/speaker/speaker.html',
        //template: '<b>SPEAKER stat.js',
        controller: 'SpeakerController',
        controllerAs: 'speaker'
    });
};
exports.$inject = ['$stateProvider'];
