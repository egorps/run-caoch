'use strict';

/* Directives */


console.log("loading directives...");
angular.module('runCoach.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]);

