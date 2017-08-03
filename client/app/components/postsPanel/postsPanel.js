import angular from 'angular';

import template from './postsPanel.html';
import controller from './postsPanel.controller';
import './postsPanel.styl';

let PostsPanelModule = angular.module('app.components.postsPanel', [])

.component('postsPanel', {
    restrict: 'E',
    bindings: {
        posts: '<',
        refreshPosts: '&'
    },
    template,
    controller
})
  
.name;

export default PostsPanelModule;
