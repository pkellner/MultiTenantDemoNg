'use strict';

module.exports = require('angular-mocks').name;

var app = require('angular').module('AngularUApp',['ngMockE2E']);

app.run(provideMocks);

function provideMocks($httpBackend){

    var speakers = require('./data/speakers.json');
    var sessions = require('./data/sessions.json');

    //http://jsfiddle.net/joshdmiller/egmpe/
    //$httpBackend.whenPOST('/phones').respond(function(method, url, data, headers){
    //    console.log('Received these data:', method, url, data, headers);
    //    phones.push(angular.fromJson(data));
    //    return [200, {}, {}];
    //});


    $httpBackend.whenGET('/rest/speaker').respond(function(method,url,data) {
        console.log("Getting speakers");
        return [200, speakers, {}];
    });

    // Pass any requests for the files
    $httpBackend.whenGET(/angu/).passThrough();
}

provideMocks.$inject = ['$httpBackend'];
