import angular from 'angular';

import template from './audioPlayer.html';
import controller from './audioPlayer.controller';
import './audioPlayer.styl';

let AudioPlayerModule = angular.module('app.components.audioPlayer', [])

.component('audioPlayer', {
    restrict: 'E',
    require: {
        audioPanel: '^audioPanel'
    },
    bindings: {
        title: '<',
        audioSample: '<'
    },
    template,
    controller
})
  
.name;

export default AudioPlayerModule;
