'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/xxx',
        //parent: 'base',
        templateUrl: '/templates/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
    });
};
exports.$inject = ['$stateProvider'];
