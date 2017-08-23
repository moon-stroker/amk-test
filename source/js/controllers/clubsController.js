/**
 * Created by @jose_farias on 19/01/17.
 * main controller
 */
 'use strict';
module.exports = function($scope, $timeout, $rootScope, $location, $route, $http){
    const urlApi='https://jsonplaceholder.typicode.com';
    var successCallback = (response)=>{
        this.items = response.data;
    }
    var errorCallback = (error)=>{
        console.log(error);
    }
    $http.get(urlApi + '/posts').then(successCallback, errorCallback);
};