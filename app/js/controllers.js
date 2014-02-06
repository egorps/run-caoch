'use strict';

/* Controllers */

console.log("loading controllers...")
var controllerModule = angular.module('runCoach.controllers', []);

controllerModule.controller('authCtrl', function ($scope, auth) {
    console.log("Creating authCtrl");
    $scope.authorized = false;
    $scope.token = null;

    var authSuccess = function(result){
        console.log("auth succeeded!", result);
        $scope.$apply(function(){
            $scope.token = result;
            $scope.authorized = true;
        });
    }

    var authFailure = function(result) {
        console.log("auth failed");
        $scope.$apply(function(){
            $scope.authorized = false;
        });
    }

    var authCallback = function (result){
      //  console.log("Auth calback:", result);
        if(result && !result.error){
            authSuccess(result);
        } else {
            authFailure(result);
        }
    }

    var userAuth = function(){
        auth.manualAuth(authCallback);
    }

    var controller = {
        scope: $scope,
        authPopup: userAuth
    };

    $scope.checkAuth = function(){
        auth.setKey();
        console.log("Checking auth...");
        auth.checkAuth(authCallback);
    }

    $scope.authorize = function(){
        console.log("Authorizign app...");
        auth.manualAuth(authCallback);
    };

    return controller;
})

controllerModule.controller('mainCtrl', function () {
})

controllerModule.controller('createCtrl', [function ($scope) {
    $scope.newFile = {};
}])

controllerModule.controller('openCtrl', [function () {
}])
