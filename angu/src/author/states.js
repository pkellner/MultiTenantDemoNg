'use strict';

var exports = module.exports = function ($stateProvider) {
    $stateProvider.state('author', {
        url: '/author',
        template: '<b>AUTHOR stat.js',
        controller: 'AuthorController',
        controllerAs: 'author'
    });
};
exports.$inject = ['$stateProvider'];
