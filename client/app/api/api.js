import angular from 'angular';

import dataApiModule from './data/data';

let ApiModule = angular.module('app.api', [
    dataApiModule
])

.name;

export default ApiModule;