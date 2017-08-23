/**
 * Created by @jose_farias on 19/01/17.
 * main controller
 */
 'use strict';
module.exports = function($scope, $timeout, $rootScope, $location, $route, $http){
    const urlApi='https://jsonplaceholder.typicode.com';
    successCallback = (response)=>{
        console.log(response);
    }
    errorCallback = (error)=>{
        console.log(error);
    }
    $http.get(urlApi + '/posts', config).then(successCallback, errorCallback);
};