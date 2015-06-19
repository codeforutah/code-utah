/* global _ */
(function () {
    'use strict';

    angular.module('app', ['ngRoute', 'ngAria']);
    angular.module('app').value('lodash', _);

    // angular.module('app').config(['$compileProvider', function ($compileProvider) {
    //       $compileProvider.debugInfoEnabled(false);
    // }]);
})();
