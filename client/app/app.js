// 3rd Party Components
import angular from 'angular';
import ngRoute from 'angular-route';
import 'angular-filter';

// Internal Components
import Screens from './screens/screens';
import Components from './components/components';
import ApiModule from './api/api';
import ServicesModule from './services/services';

// App component
import template from './app.html';
import './app.styl';

angular.module('app', [
    'angular.filter',
    ngRoute,
    Screens,
    Components,
    ApiModule,
    ServicesModule
])

.config(($locationProvider) => {
    "ngInject";

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');  
})

.component('app', {
    template,
    controller: function () {
        "ngInject";
    }
});