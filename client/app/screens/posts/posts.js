import angular from 'angular';
import ngRoute from 'angular-route';

import template from './posts.html';
import controller from './posts.controller';
import './posts.styl';

let PostsModule = angular.module('posts', [
    ngRoute
])

.config(($routeProvider) => {
    'ngInject';

    $routeProvider
        .when('/posts', {
            template: '<posts class="posts" posts="$resolve.posts"></posts>',
            activetab: 'posts',
            resolve: {
                posts: DataService => {
                    return DataService.getPosts();
                }
            }
        })
        .otherwise('/posts');
})

.component('posts', {
    restrict: 'E',
    bindings: {
        posts: '<'
    },
    template,
    controller
})

.name;

export default PostsModule;