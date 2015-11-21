'use strict';

var speaker = require('./speaker');
module.exports = angular.module('multiTenantBase', [])
    .service('Speaker', require('./speaker'))
    .name;

//function SpeakerService($http, $q) {
//    console.log('speakerzzz');
//    this.fetchAll = function () {
//        var defer = $q.defer();
//        $http.get('/rest/speaker').success(function (data) {
//            defer.resolve(data);
//        }).error(function (data) {
//            console.log('rest speaker error');
//        });
//        return defer.promise;
//    }
//}
//SpeakerService.$inject = ['$http', '$q'];


//var speakers = [
//    {
//        "id": 32051,
//        "firstName": "Jeff",
//        "lastName": "Whelpley",
//        "speakerUrl": "jeff-whelpley-32051",
//        "imageUrl": "",
//        "webSite": "http://gethuman.com",
//        "bio": "Jeff is the Chief Architect at GetHuman and co-organizer of the extremely popular Angular Boston meetup. He recently gave a talks at ng-conf 2015 on Angular 1.x server rendering and ng-vegas 2015 on Angular 2. More recently he has been working on bringing server rendering to Angular 2.",
//        "allowHtml": false,
//        "sessions": [
//            {
//                "id": 4771,
//                "title": "Angular 2 Server Rendering",
//                "sessionUrl": "angular-2-server-rendering",
//                "desriptionShort": "Angular2 was built from the ground up to potentially run anywhere, including your web server. In this talk, we will go through the implications of this design and demonstrate the power of rendering your Angular2 app on the server.",
//                "description": "Unlike Angular 1.x, Angular2 is not tightly coupled to the DOM. In fact, Angular2 was built from the ground up to potentially run anywhere, including your web server. In this talk, we will go through the implications of this design and demonstrate the power of rendering your Angular2 app on the server.",
//                "tenantName": "ANGU",
//                "keyNote": false
//            }
//        ],
//        "keyNoteSpeaker": false
//    },
//    {
//        "id": 11388,
//        "firstName": "Aysegul",
//        "lastName": "Yonet",
//        "speakerUrl": "aysegul-yonet-11388",
//        "imageUrl": "",
//        "webSite": "github.com/yonet",
//        "bio": "Aysegul Yonet is CTO of AnnieCannons, Inc and a Software Engineer focusing on data visualization and analytics. Aysegul hosts Women Who Code and Girl Develop It JavaScript Meetups in San Francisco. She also teaches workshops for D3.js, AngularJS, and MEAN stack.",
//        "allowHtml": true,
//        "sessions": [
//            {
//                "id": 4756,
//                "title": "Creating d3 Components with Angular2 and TypeScript",
//                "sessionUrl": "creating-d3-components-with-angular2-and-typescript",
//                "desriptionShort": "By creating d3 components in Angular you gain even more declarative API. Angular allows you to construct your own declarative DSL so you can easily reason about visualizations you create.",
//                "description": "By creating d3 components in Angular you gain even more declarative API. Angular allows you to construct your own declarative DSL so you can easily reason about visualizations you create.",
//                "tenantName": "ANGU",
//                "keyNote": false
//            }
//        ],
//        "keyNoteSpeaker": false
//    }
//];
//var i = 0;
//for (i = 0; i < speakers.length; i++) {
//    speakers[i].speakerImageUrl = "https://www.siliconvalley-codecamp.com/attendeeimage/" +
//        speakers[i].id + ".jpg?format=jpg&amp;height=190&amp;width=290&amp;scale=both&amp;mode=pad&amp;Bgcolor=ffffff";
//}
//return speakers;








