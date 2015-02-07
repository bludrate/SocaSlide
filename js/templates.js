'use strict';

angular.module('templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/header/header.html', '<header class="header" layout="row" ng-controller="HeaderController"><a href="/" class="logo">SocaSlide</a></header>');

  $templateCache.put('modules/photo-selector/albums.html', '<grid-size size="gridSize"></grid-size><ul class="album-list album-list_size_{{gridSize}}"><li class="album-list__item" ng-repeat="album in albums" title="{{album.title}}"><a href="/albums/{{album.id}}"><img ng-src="{{album.sizes | photoSrc: gridSize }}"> <span class="album-list__item-title">{{album.title}}</span></a></li></ul>');

  $templateCache.put('modules/photo-selector/photos.html', '<grid-size size="gridSize"></grid-size><ul class="photo-list photo-list_size_{{gridSize}}"><li class="photo-list__item" ng-repeat="photo in photos" title="{{photo.title}}"><img ng-src="{{photo.sizes | photoSrc: gridSize }}"></li></ul>');

  $templateCache.put('modules/directives/grid-size/grid-size.html', '<select ng-model="gridSize"><option value="o">{{names.o}}</option><option value="p">{{names.p}}</option><option value="q">{{names.q}}</option></select>');

}]);