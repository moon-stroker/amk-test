"use strict";
;(function(){
	var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.materialize']);

	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
		$routeProvider.when('/', {
	      	templateUrl: 'templates/home.html',
            controller: 'mainController as mainCtrl',
            privateRoute: false
        })  
		$routeProvider.when('/clubs', {
	      	templateUrl: 'templates/clubs.html',
            controller: 'clubsController as ctrlClubs',
            privateRoute: true
        })  
		$routeProvider.when('/suscriptores', {
	      	templateUrl: 'templates/clubs.html',
            controller: 'suscriptorsController',
            privateRoute: true
        })  
    }]);

    app.controller('mainController', ['$scope', '$timeout', '$rootScope', '$location', '$route', '$http', require('./controllers/mainController')]);
    app.controller('clubsController', ['$scope', '$timeout', '$rootScope', '$location', '$route', '$http', require('./controllers/clubsController')]);
    app.controller('suscriptorsController', ['$scope', '$timeout', '$rootScope', '$location', '$route', '$http', require('./controllers/suscriptorsController')]);
    
})();