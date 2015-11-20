'use strict';
var angular = require('angular');

//var speaker = require('./speaker');

module.exports = angular.module('multiTenantBase', [
   //speaker
]).service('Speaker',function(){
    console.log('speakerzzz');
})
    .name;