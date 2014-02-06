'use strict';

// Declare app level module which depends on filters, and services
function initApp() {
    var app = angular.module('runCoach', [
        'ngRoute',
        'runCoach.filters',
        'runCoach.services',
        'runCoach.directives',
        'runCoach.controllers'
    ]);
    app.constant('appInfo', {
        clientId: '383212153610-9kkuklhqh165okb295rthmfpm1111hd3.apps.googleusercontent.com',
        appId: "run-coach",
        scopes: ['https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive.install']
    });
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/open', {templateUrl: 'partials/open.html', controller: 'openCtrl'});
        $routeProvider.when('/create', {templateUrl: 'partials/create.html', controller: 'createCtrl'});
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'mainCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
    return app;
}


