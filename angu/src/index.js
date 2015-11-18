'use strict';

module.exports = require('angular')
    .module('AngularUApp', [
        require('angular-ui-router'),
        require('./home'),
        require('./about')
    ])
    .config(enableHtml5Mode)
    .name;

enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode($locationProvider) {
    $locationProvider.html5Mode(true);
}