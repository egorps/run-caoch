'use strict';

/* Services */

console.log("loading services...");
// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('runCoach.services', []);
services.value('version', '0.1');

// Create an Angular service to wrap the google api. This allows dependency injection
// for other components that depend on the google api, leading to better testiability.
services.factory('google',
    function () {
       return gapi;
    }
);

services.factory('auth',
    /*
     * Auth based on this doc: https://developers.google.com/api-client-library/javascript/features/authentication
     * */
    function (google, appInfo) {
        console.log("Creating auth service...")
        var authManager = {
            checkAuth: function (user_callback) {
                google.auth.authorize({client_id: appInfo.clientId, scope: appInfo.scopes, immediate: true}, user_callback);
            },
            manualAuth: function (user_callback) {
                google.auth.authorize({client_id: appInfo.clientId, scope: appInfo.scopes, immediate: false}, user_callback);
            },
            setKey: function() {
                google.client.setApiKey('AIzaSyBVOeuzzsobu7K7eWk8JYlgWzOJMOtQPVI');
            }
        }
        return authManager;
    }
);
