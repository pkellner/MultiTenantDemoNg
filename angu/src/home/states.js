'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        //parent: 'base',
        template: '<b>HOME stat.js',
        controller: 'HomeController',
        controllerAs: 'home'

    });
};
exports.$inject = ['$stateProvider'];
