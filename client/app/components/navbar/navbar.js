import angular from 'angular';

import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';

let NavbarModule = angular.module('app.components.navbar', [])

.component('navbar', {
    restrict: 'E',
    bindings: {},
    template,
    controller
})
  
.name;

export default NavbarModule;
