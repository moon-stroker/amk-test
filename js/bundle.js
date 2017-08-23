(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

;(function () {
  var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.materialize']);

  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'mainController as mainCtrl',
      privateRoute: false
    });
    $routeProvider.when('/clubs', {
      templateUrl: 'templates/clubs.html',
      controller: 'clubsController as ctrlClubs',
      privateRoute: true
    });
    $routeProvider.when('/suscriptores', {
      templateUrl: 'templates/clubs.html',
      controller: 'suscriptorsController',
      privateRoute: true
    });
  }]);

  app.controller('mainController', ['$scope', '$timeout', '$rootScope', '$location', '$route', '$http', require('./controllers/mainController')]);
  app.controller('clubsController', ['$scope', '$timeout', '$rootScope', '$location', '$route', '$http', require('./controllers/clubsController')]);
  app.controller('suscriptorsController', ['$scope', '$timeout', '$rootScope', '$location', '$route', '$http', require('./controllers/suscriptorsController')]);
})();

},{"./controllers/clubsController":2,"./controllers/mainController":3,"./controllers/suscriptorsController":4}],2:[function(require,module,exports){
/**
 * Created by @jose_farias on 19/01/17.
 * main controller
 */
'use strict';

module.exports = function ($scope, $timeout, $rootScope, $location, $route, $http) {
    var _this = this;

    var urlApi = 'https://jsonplaceholder.typicode.com';
    var successCallback = function successCallback(response) {
        _this.items = response.data;
    };
    var errorCallback = function errorCallback(error) {
        console.log(error);
    };
    $http.get(urlApi + '/posts').then(successCallback, errorCallback);
};

},{}],3:[function(require,module,exports){
/**
 * Created by @jose_farias on 19/01/17.
 * main controller
 */
'use strict';

module.exports = function ($scope, $timeout, $rootScope, $location, $route, $http) {
  // function to submit the form after all validation has occurred            
  this.submitForm = function (isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      $location.path('/clubs');
    }
  };
};

},{}],4:[function(require,module,exports){
/**
 * Created by @jose_farias on 19/01/17.
 * main controller
 */
'use strict';

module.exports = function ($scope, $timeout, $rootScope, $location, $route, $http) {
    var urlApi = 'https://jsonplaceholder.typicode.com';
    successCallback = function successCallback(response) {
        console.log(response);
    };
    errorCallback = function errorCallback(error) {
        console.log(error);
    };
    $http.get(urlApi + '/posts', config).then(successCallback, errorCallback);
};

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
