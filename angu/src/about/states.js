'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('about', {
        url: '/about',
        //parent: 'base',
        template: '<b>ABOUT stat.js',
        controller: 'AboutController',
        controllerAs: 'about'

    });
};
exports.$inject = ['$stateProvider'];
