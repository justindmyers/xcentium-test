import angular from 'angular';
import ngRoute from 'angular-route';

import template from './audio.html';
import controller from './audio.controller';
import './audio.styl';

let AudioModule = angular.module('audio', [
    ngRoute
])

.config(($routeProvider) => {
    "ngInject";

    $routeProvider
        .when('/audio', {
            template: '<music class="music" audio-samples="$resolve.audioSamples"></music>',
            activetab: 'audio',
            resolve: {
                audioSamples: DataService => {
                    return DataService.getAudio();
                }
            }
        });
})

.component('music', {
    restrict: 'E',
    bindings: {
        audioSamples: '<'
    },
    template,
    controller
})

.name;

export default AudioModule;