import angular from 'angular';
import Posts from './posts/posts';
import Audio from './audio/audio';

let ScreensModule = angular.module('app.screens', [
    Posts,
    Audio
])

.name;

export default ScreensModule;