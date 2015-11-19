'use strict';

module.exports = require('angular')
    .module('AngularUApp', [
        require('angular-ui-router'),
        require('./home'),
        require('./speaker'),
        require('./author')
    ])
    .config(enableHtml5Mode)
    .name;

enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode($locationProvider) {
    console.log('enableHtml5Mode');
    $locationProvider.html5Mode(true);
}
