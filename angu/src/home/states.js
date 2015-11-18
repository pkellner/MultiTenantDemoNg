'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: '<b>HOME stat.js',
        controller: 'HomeController',
        controllerAs: 'home'

    });
};
exports.$inject = ['$stateProvider'];
