'use strict';
module.exports = function($http){

    var isAuthenticated = false;
    this.setUserAuthenticated = function(value){
        isAuthenticated = value;
    };

    this.getUserAuthenticated = function(){
        return isAuthenticated;
    }

    return this;

};