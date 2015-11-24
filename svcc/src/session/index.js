'use strict';

module.exports = require('angular')
    .module('session', [])
    .controller('SessionController', require('./controller'))
    .config(require('./states'))
    .name;