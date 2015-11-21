'use strict';

module.exports = require('angular')
    .module('AngularUApp', [
        require('angular-ui-router'),
        require('angular-sanitize'),
        require('../../base'),
        require('./home'),
        require('./speaker'),
        require('./author')
    ])
    .config(enableHtml5Mode)
    .name;


require('angular-mocks');

var app = require('angular').module('AngularUApp');
app.requires.push('ngMockE2E');
app.run(provideMocks);



enableHtml5Mode.$inject = ['$locationProvider'];
function enableHtml5Mode($locationProvider) {
    console.log('enableHtml5Mode');
    $locationProvider.html5Mode(true);
}

function provideMocks($httpBackend){


    //var speakers = require('./data/speakers.json');
    //var sessions = require('./data/sessions.json');

    //http://jsfiddle.net/joshdmiller/egmpe/
    //$httpBackend.whenPOST('/phones').respond(function(method, url, data, headers){
    //    console.log('Received these data:', method, url, data, headers);
    //    phones.push(angular.fromJson(data));
    //    return [200, {}, {}];
    //});


    $httpBackend.whenGET('/rest/speaker').respond(function(method,url,data) {
        console.log("Getting speakers");

        var speakers = require('../mock/data/speakers.json');

        //var speakers = [
        //    {
        //        "id": 12591,
        //        "firstName": "Tobiah",
        //        "lastName": "Zarlez",
        //        "speakerUrl": "tobiah-zarlez-12591",
        //        "imageUrl": "",
        //        "webSite": "http://www.tobiahmarks.com/",
        //        "bio": "Hi, I’m Tobiah. I’m an independent game developer from the SF Bay Area.\n\nRight after college, I started a company called “Yobonja” with a couple of friends. We made dozens of games, and eventually had a hit with “Blast Monkeys”. We were the number one app on Android for 6+ months. I stopped tracking downloads in 2012 after we passed 12 million, and people still play it and its sequel today.\n\nIn 2013 I started working for Microsoft as a Game Evangelist. My job is to talk to developers, teach them what I know, and help them make better games and successful companies succeed.",
        //        "allowHtml": false
        //    }
        //];

        return [200, speakers, {}];
    });

    // Pass any requests for the files
    $httpBackend.whenGET(/templates/).passThrough();
}

provideMocks.$inject = ['$httpBackend'];
