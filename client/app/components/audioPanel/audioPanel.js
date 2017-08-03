import angular from 'angular';

import template from './audioPanel.html';
import controller from './audioPanel.controller';
import './audioPanel.styl';

let AudioPanelModule = angular.module('app.components.audioPanel', [])

.component('audioPanel', {
    restrict: 'E',
    bindings: {
        audioSamples: '<'
    },
    template,
    controller
})
  
.name;

export default AudioPanelModule;
