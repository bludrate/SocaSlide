'use strict';

angular.module('ss.templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/audio-selector/audio-selector.html', '<section class="audio-selector" ng-controller="AudiosController"><header class="audio-selector__header"><h2 class="audio-selector__title">Choice audio</h2><input type="text" ng-model="search" class="audio-filter"></header><ul class="audio-list"><li class="audio-list__item" ng-repeat="audio in audios | filter:search track by audio.id" title="{{audio.artist + \'-\' + audio.title}}" ng-click="toggleAudio(audio)"><span class="audio-list__duration">{{audio.duration | timeFormatter}}</span> <span class="audio-list__name">{{audio.artist + \' - \' + audio.title}}</span></li></ul></section>');

  $templateCache.put('modules/header/header.html', '<header class="header"><a href="/" active-link="home" class="logo">SocaSlide</a></header>');

  $templateCache.put('modules/photo-selector/albums.html', '<grid-size size="gridSize"></grid-size><ul class="album-list album-list_size_{{gridSize}}"><li class="album-list__item" ng-repeat="album in albums track by album.id" title="{{album.title}}"><a href="/create/albums/{{album.id}}"><img ng-src="{{album.sizes | photoSrc: gridSize }}"> <span class="album-list__item-title">{{album.title}}</span></a></li></ul>');

  $templateCache.put('modules/photo-selector/photos.html', '<grid-size size="gridSize"></grid-size><ul class="photo-list photo-list_size_{{gridSize}}"><li class="photo-list__item" ng-class="{selected: photo.selected}" ng-repeat="photo in photos track by photo.id" title="{{photo.title}}" ng-click="togglePhoto(photo)"><img ng-src="{{photo.sizes | photoSrc: gridSize }}"></li></ul>');

  $templateCache.put('modules/player/player.html', '<div class="player"><player-canvas></player-canvas><player-controls></player-controls></div>');

  $templateCache.put('modules/timeline/timeline.html', '<div class="timeline" ng-controller="FramesController"><ul class="frame-list"><li class="frame-list__item" ng-repeat="frame in frames track by frame.id" title="{{frame.title}}" ng-click="removeFrame(frame)"><img ng-src="{{frame.sizes | photoSrc: \'o\' }}"></li></ul><ul class="timeline-audios"><li class="timeline-audios__item" active-link="home" ng-repeat="audio in audios track by audio.id" title="{{audio.artist + \' - \' + audio.title}}"><span class="timeline-audios__duration">{{audio.duration | timeFormatter}}</span> <span class="timeline-audios__audio-name">{{audio.artist + \' - \' + audio.title}}</span></li></ul><button class="create-slideshow" ng-click="saveSlideshow()"></button></div>');

  $templateCache.put('pages/create-page/create-page.html', '<section class="create-section"><ng-include src="\'modules/audio-selector/audio-selector.html\'"></ng-include><section app-view-segment="1"></section><ng-include src="\'modules/timeline/timeline.html\'"></ng-include></section>');

  $templateCache.put('pages/home-page/home-page.html', '<a href="/create">Create slideshow</a>');

  $templateCache.put('modules/directives/grid-size/grid-size.html', '<select ng-model="gridSize"><option value="o">{{names.o}}</option><option value="p">{{names.p}}</option><option value="q">{{names.q}}</option></select>');

  $templateCache.put('modules/player/directives/player-controls/player-controls.html', '<button ng-click="play()">play</button> <button ng-click="pause()">pause</button> <button ng-click="stop()">stop</button>');

}]);