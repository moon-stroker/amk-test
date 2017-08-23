/**
 * Created by @jose_farias on 19/01/17.
 * main controller
 */
 'use strict';
module.exports = function($scope, $timeout, $rootScope, $location, $route, $http){
   // function to submit the form after all validation has occurred            
  this.submitForm = function(isValid) {

    // check to make sure the form is completely valid
    if (isValid) {
      $location.path('/clubs')
    }
  };
};