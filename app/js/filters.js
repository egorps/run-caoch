'use strict';

/* Filters */

console.log("loading filters...")
angular.module('runCoach.filters', []).
    filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);
