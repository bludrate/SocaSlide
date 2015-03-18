'use strict';

angular.module('ss.templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/dialog/dialog.html', '<div class="dialog-holder" ng-show="dialogService.showed" ng-include="dialogService.data.template" ng-click="closeOnBgClick($event)"></div>');

  $templateCache.put('modules/audio-selector/audio-selector.html', '<section class="audio-selector section" ng-controller="AudiosController"><header class="section__header"><input type="text" ng-model="search" class="audio-selector__filter" placeholder="Поиск"><h2 class="section__title">Выберите музыку</h2></header><ul class="audio-list"><li class="audio-list__item" ng-repeat="audio in audios | filter:search track by audio.id" ng-class="{selected: audio.selected}" ng-click="toggleAudio($event, audio)"><button class="audio-list__play" play-audio="{{audio.url}}"></button> <span class="audio-list__duration">{{audio.duration | timeFormatter}}</span> <span class="audio-list__name">{{audio.artist + \' - \' + audio.title}}</span> <button class="audio-list__toggle"></button></li></ul></section>');

  $templateCache.put('modules/header/header.html', '<header class="header" ng-controller="HeaderController"><a href="#/home" active-link="home" class="logo">SocaSlide</a><breadcrumbs></breadcrumbs><div class="header__user">{{firstName}} {{lastName}}</div><a href="#/slideshow/{{slideshow.id}}" ng-repeat="slideshow in slideshows" style="margin-right: 10px;">{{slideshow.get(\'title\') || \'hi\'}}</a></header>');

  $templateCache.put('modules/panel/panel.html', '<div class="panel"><frame-list></frame-list><div class="panel__info"><div class="panel__photo-count panel__info-row">{{selectedPhotos.size()}}</div><div class="panel__duration panel__info-row">{{ duration() | timeFormatter:\'ms\' }}</div><audio-list class="panel__info-row"></audio-list></div><div class="panel__btns"><button class="create-slideshow" ng-click="preview()"></button> <button class="open-settings" ng-click="openSettings()"></button></div></div>');

  $templateCache.put('modules/photo-selector/albums.html', '<header class="section__header"><grid-size size="gridSize"></grid-size><h2 class="section__title">Альбомы</h2></header><div class="section__content"><ul class="album-list album-list_size_{{gridSize}}"><li class="album-list__item" data-ng-repeat="album in albums track by album.id"><img ng-src="{{album.sizes | photoSrc: gridSize }}"> <span class="album-list__item-title" title="{{album.title}}">{{album.title}}</span><div class="album-list__buttons"><a href="#/create/albums/{{album.id}}" class="album-list__button album-list__button_open" title="Открыть"></a> <button class="album-list__button album-list__button_add" ng-click="add(album)" title="Добавить весь альбом"></button></div></li></ul></div>');

  $templateCache.put('modules/photo-selector/photos.html', '<header class="section__header"><grid-size size="gridSize"></grid-size><h2 class="section__title">{{album.title}}</h2></header><div class="section__content"><ul class="photo-list photo-list_size_{{gridSize}}"><li class="photo-list__item" ng-class="{selected: photo.selected}" ng-repeat="photo in photos track by photo.id" title="{{photo.title}}" ng-click="togglePhoto(photo)"><img ng-src="{{photo.sizes | photoSrc: gridSize }}"></li></ul></div>');

  $templateCache.put('modules/player/player.html', '<div class="player" ng-mousemove="resetActivity()" ng-class="{\'player_no-activity\': noActivity, \'player_rewind-started\': rewindStarted}"><player-canvas></player-canvas><player-controls autoplay="{{autoplay}}" toggle-full-screen="toggleFullScreen()" duration="{{duration}}" no-activity="noActivity" rewind-started="rewindStarted"></player-controls></div>');

  $templateCache.put('modules/player-modal/player-modal.html', '<section class="dialog"><button class="dialog__close dialog__close_video" ng-click="dialogService.close()"></button><player autoplay="" src="{{dialogService.data.src}}"></player></section>');

  $templateCache.put('modules/preview-modal/preview-modal.html', '<section class="dialog"><button class="dialog__close dialog__close_video" ng-click="dialogService.close()"></button><player src="local"></player><form class="preview-modal__content" ng-submit="saveSlideshow()" ng-controller="PreviewModalController"><div class="form-row"><label class="label" for="slideshowTitle">Заголовок</label><div class="input-holder"><input class="input" id="slideshowTitle" type="text" ng-model="title"></div></div><div class="form-btns"><button class="button button_cancel" type="button" ng-click="dialogService.close()">Отмена</button> <button class="button" type="submit">Сохранить</button></div></form></section>');

  $templateCache.put('modules/slideshow-list/slideshow-list.html', '<div><ul class="slideshow-list" ng-if="slideshows.length"><li class="slideshow-list__item" ng-repeat="slideshow in slideshows"><img ng-src="{{slideshow.get(\'cover\').sizes | photoSrc:\'p\'}}"> <span class="slideshow-list__item-title-wrap"><span class="slideshow-list__item-duration">{{slideshow.get(\'duration\') | timeFormatter: \'ms\'}}</span> <span class="slideshow-list__item-title">{{slideshow.get(\'title\') || \'Без заголовка\'}}</span></span><div class="slideshow-list__buttons"><button ng-click="show(slideshow.id)" class="slideshow-list__button slideshow-list__button_show" title="Просмотр"></button> <button ng-click="share(slideshow)" class="slideshow-list__button slideshow-list__button_share" title="Опубликовать"></button> <button ng-click="remove(slideshow)" class="slideshow-list__button slideshow-list__button_remove" title="Удалить"></button></div></li></ul><div ng-if="slideshows && !slideshows.length" class="wrapper"><br><br>Вы пока еще не создали ни 1 слайдшоу. <a href="#/create/">Создать мое первое слайдшоу</a></div></div>');

  $templateCache.put('modules/slideshow-saved-modal/slideshow-saved-modal.html', '<section class="dialog" ng-controller="SlideshowSavedController"><header class="dialog__header"><h2 class="dialog__title">Слайдшоу сохранено</h2><button class="dialog__close" ng-click="dialogService.close()"></button></header><main class="dialog__content"><a href="{{URLS.app + \'#/slideshow/\' + dialogService.data.slideshow.id}}">Ссылка на слайдшоу</a><br><a href ng-click="share(dialogService.data.slideshow)">Опубликовать</a></main></section>');

  $templateCache.put('modules/slideshow-settings/slideshow-settings.html', '<section class="dialog" ng-controller="SlideshowSettingsController"><header class="dialog__header"><h2 class="dialog__title">Настройки слайдшоу</h2><button class="dialog__close" ng-click="dialogService.close()"></button></header><main class="dialog__content"><form ng-submit="save(); dialogService.close()"><div class="form-row"><label class="label" for="slideDuration">Длительность кадра</label><div class="input-holder"><input type="number" class="input" id="slideDuration" name="slideDuration" placeholder="slide duration" ng-model="data.slideDuration"></div></div><div class="form-btns"><button class="button button_cancel" ng-click="dialogService.close()">Отмена</button> <button type="submit" class="button">Сохранить</button></div></form></main></section>');

  $templateCache.put('modules/tooltip/tooltip.html', '<span class="tooltip" ng-show="tooltipService.showed">{{tooltipService.data.message}}</span>');

  $templateCache.put('pages/home-page/home-page.html', '<section class="section"><header class="section__header"><div class="section__header-controls"><a href="#/create" class="button">Создать своё слайдшоу</a></div><h2 class="section__title">Мои слайдшоу</h2></header><section class="section__content"><slideshow-list user-id="{{currentUser}}"></slideshow-list></section></section>');

  $templateCache.put('pages/create-page/create-page.html', '<section class="create-section"><ng-include src="\'modules/audio-selector/audio-selector.html\'"></ng-include><section class="section" app-view-segment="1"></section><panel></panel></section>');

  $templateCache.put('pages/slideshow-page/slideshow-page.html', '<player src="{{src}}"></player>');

  $templateCache.put('pages/start-page/start-page.html', '<div class="location-loading">Инициализация...</div>');

  $templateCache.put('modules/directives/breadcrumbs/breadcrumbs.html', '<ul ng-if="breadcrumbs" class="breadcrumbs"><li ng-repeat="breadcrumb in breadcrumbs" class="breadcrumbs__item"><ng-switch on="!!breadcrumb.link"><a ng-href="#{{breadcrumb.link}}" ng-switch-when="true" class="breadcrumbs__link">{{breadcrumb.name}}</a> <span ng-switch-default="" class="breadcrumbs__active">{{breadcrumb.name}}</span></ng-switch></li></ul>');

  $templateCache.put('modules/directives/grid-size/grid-size.html', '<div class="grid-size-block"><button ng-repeat="size in sizes" class="grid-size grid-size_{{size}}" ng-class="{active: size === gridSize}" ng-click="$parent.changeSize(size)">{{$parent.names[size]}}</button></div>');

  $templateCache.put('modules/panel/directives/frame-list/frame-list.html', '<div class="frame-list__holder"><button class="frame-list__prev" ng-click="prev()" ng-disabled="disabled || prevDisabled"></button><div class="frame-list__wrap"><ul class="frame-list"><li class="frame-list__item" ng-repeat="frame in frames track by frame.id" title="{{frame.title}}" ng-click="removeFrame(frame)"><img ng-src="{{frame.sizes | photoSrc: \'o\' }}"></li></ul><span class="frame-placeholders"><span class="frame-placeholder" ng-repeat="placeholder in placeholders track by $index"></span></span></div><button class="frame-list__next" ng-click="next()" ng-disabled="disabled || nextDisabled"></button></div>');

  $templateCache.put('modules/panel/directives/audio-list/audio-list.html', '<ul class="panel-audios"><li class="panel-audios__item" ng-repeat="audio in audios track by audio.id" title="{{audio.artist + \' - \' + audio.title}}"><span class="panel-audios__info">{{audio.artist + \' - \' + audio.title}}&nbsp;&nbsp;&nbsp;{{audio.duration | timeFormatter}}</span></li></ul>');

  $templateCache.put('modules/panel/directives/timeline/timeline.html', '');

  $templateCache.put('modules/player/directives/player-controls/player-controls.html', '<div class="controls" ng-class="{controls_paused: !played}"><button ng-click="toggle()" class="controls__toggle" ng-class="{controls__toggle_pause: played}"></button> <button ng-click="toggleFullScreen()" class="controls__full-screen" ng-class="{active: fullScreenActive()}"></button> <input class="controls__volume" type="range" ng-model="volume" min="0" max="100" ng-change="setVolume()"><div class="controls__progress-holder"><input type="range" class="controls__progress" min="0" max="{{duration}}" ng-model="currentTime" ng-change="rewind()" ng-mousedown="rewindStart()" ng-mouseup="rewindEnd()"></div></div>');

}]);