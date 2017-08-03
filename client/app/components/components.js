import angular from 'angular';

import Navbar from './navbar/navbar';
import PostsPanel from './postsPanel/postsPanel';
import AudioPanel from './audioPanel/audioPanel';
import AudioPlayer from './audioPlayer/audioPlayer';

let ComponentsModule = angular.module('app.components', [
    Navbar,
    PostsPanel,
    AudioPanel,
    AudioPlayer
])

.name;

export default ComponentsModule;