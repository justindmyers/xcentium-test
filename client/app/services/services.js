import angular from 'angular';
import dataServiceModule from './data/data';

let ServicesModule = angular.module('app.services', [
    dataServiceModule
])

.name;

export default ServicesModule;