import angular from 'angular';
import Dataservice from './data.service';

let dataServiceModule = angular.module('app.services.data', [])

.factory('DataService', Dataservice)
  
.name;

export default dataServiceModule;
