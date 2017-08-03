import angular from 'angular';
import DataApiFactory from './data.factory';

let DataApiModule = angular.module('app.api.data', [])

.factory('DataApi', DataApiFactory)
  
.name;

export default DataApiModule;
