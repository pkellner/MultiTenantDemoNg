'use strict';

module.exports = require('angular')
    .module('about', [])
    .controller('AboutController', require('./controller'))
    .config(require('./states'))
    .name;