'use strict';

angular.module('ss.templates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/audio-selector/audio-selector.html', '<section class="audio-selector section" ng-controller="AudiosController"><header class="section__header"><input type="text" ng-model="search" class="audio-selector__filter" placeholder="Поиск"><h2 class="section__title">Выберите музыку</h2></header><ul class="audio-list"><li class="audio-list__item" ng-repeat="audio in audios | filter:search track by audio.id" ng-class="{selected: audio.selected}" ng-click="toggleAudio($event, audio)"><button class="audio-list__play" play-audio="{{audio.url}}"></button> <span class="audio-list__duration">{{audio.duration | timeFormatter}}</span> <span class="audio-list__name">{{audio.artist + \' - \' + audio.title}}</span> <button class="audio-list__toggle"></button></li></ul></section>');

  $templateCache.put('modules/dialog/dialog.html', '<div class="dialog-holder" ng-show="dialogService.showed" ng-include="dialogService.data.template" ng-click="closeOnBgClick($event)"></div>');

  $templateCache.put('modules/header/header.html', '<header class="header"><a href="/#/" active-link="home" class="logo">SocaSlide</a><breadcrumbs></breadcrumbs></header>');

  $templateCache.put('modules/panel/panel.html', '<div class="panel"><frame-list></frame-list><div class="panel__info"><div class="panel__photo-count panel__info-row">{{selectedPhotos.size()}}</div><div class="panel__duration panel__info-row">{{ (selectedPhotos.size() * settings.slideDuration) | timeFormatter}}</div><audio-list class="panel__info-row"></audio-list></div><div class="panel__btns"><button class="create-slideshow" ng-click="saveSlideshow()"></button> <button class="open-settings" ng-click="openSettings()"></button></div></div>');

  $templateCache.put('modules/photo-selector/albums.html', '<header class="section__header"><grid-size size="gridSize"></grid-size><h2 class="section__title">Альбомы</h2></header><div class="section__content"><ul class="album-list album-list_size_{{gridSize}}"><li class="album-list__item" data-ng-repeat="album in albums track by album.id"><img ng-src="{{album.sizes | photoSrc: gridSize }}"> <span class="album-list__item-title">{{album.title}}</span><div class="album-list__buttons"><a href="#/create/albums/{{album.id}}" class="album-list__button album-list__button_open" title="Открыть"></a> <button class="album-list__button album-list__button_add" ng-click="add(album)" title="Добавить весь альбом"></button></div></li></ul></div>');

  $templateCache.put('modules/photo-selector/photos.html', '<header class="section__header"><grid-size size="gridSize"></grid-size><h2 class="section__title">{{album.title}}</h2></header><div class="section__content"><ul class="photo-list photo-list_size_{{gridSize}}"><li class="photo-list__item" ng-class="{selected: photo.selected}" ng-repeat="photo in photos track by photo.id" title="{{photo.title}}" ng-click="togglePhoto(photo)"><img ng-src="{{photo.sizes | photoSrc: gridSize }}"></li></ul></div>');

  $templateCache.put('modules/player/player.html', '<div class="player"><player-canvas></player-canvas><player-controls></player-controls></div>');

  $templateCache.put('modules/player-modal/player-modal.html', '<section class="dialog"><button class="dialog__close dialog__close_video" ng-click="dialogService.close()"></button><player src="{{dialogService.data.id}}"></player></section>');

  $templateCache.put('modules/slideshow-settings/slideshow-settings.html', '<section class="dialog" ng-controller="SlideshowSettingsController"><header class="dialog__header"><h2 class="dialog__title">Настройки слайдшоу</h2><button class="dialog__close" ng-click="dialogService.close()"></button></header><main class="dialog__content"><form ng-submit="save(); dialogService.close()"><div class="form-row"><label class="label" for="slideDuration">Длительность кадра</label><div class="input-holder"><input type="number" class="input" id="slideDuration" name="slideDuration" placeholder="slide duration" ng-model="data.slideDuration"></div></div><div class="form-btns"><button class="button button_cancel" ng-click="dialogService.close()">Отмена</button> <button type="submit" class="button">Сохранить</button></div></form></main></section>');

  $templateCache.put('modules/tooltip/tooltip.html', '<span class="tooltip" ng-show="tooltipService.showed">{{tooltipService.data.message}}</span>');

  $templateCache.put('pages/create-page/create-page.html', '<section class="create-section"><ng-include src="\'modules/audio-selector/audio-selector.html\'"></ng-include><section class="section" app-view-segment="1"></section><panel></panel></section>');

  $templateCache.put('pages/home-page/home-page.html', '<div class="wrapper"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut blanditiis corporis culpa cum deserunt dolor ducimus eaque eos esse et, eveniet explicabo facere iusto maiores numquam possimus provident qui quidem quo repellat repudiandae sapiente sequi similique, sint soluta sunt tempore ut vel. Alias aliquam cumque delectus deleniti dolores error excepturi, ipsa iure laboriosam, molestias quae repellat sapiente sit ut veritatis. A aliquam aliquid amet assumenda blanditiis consectetur dignissimos doloremque eaque esse eum eveniet ex fugit illum impedit laudantium necessitatibus nobis perspiciatis quibusdam recusandae repellendus sequi similique, sint sit tempora tempore, vero voluptates! Ab amet blanditiis enim eveniet facere fugiat placeat qui sapiente tenetur? Ab aperiam, beatae blanditiis consequatur dolore ducimus ea, et eum itaque laudantium nesciunt optio, perferendis quam reiciendis repudiandae vitae voluptatem. Accusantium aliquid amet iure, quaerat quam quia sint soluta vero. A accusamus amet eligendi est facilis hic itaque magni odit quaerat, sequi soluta voluptas voluptatibus. Accusantium assumenda dolorem harum laboriosam necessitatibus qui voluptates. Aut doloremque doloribus eligendi eos esse et eveniet explicabo facilis fuga illum in minima nam natus necessitatibus nobis nulla omnis perspiciatis porro, quaerat, quam quia quod repellendus similique soluta sunt velit voluptatem. Ab et saepe sapiente? Doloremque dolores nulla omnis optio quam sunt ullam. Accusantium aliquam atque cupiditate deleniti dignissimos dolorem earum eligendi excepturi explicabo iure nam, nulla numquam quasi rerum sint tempore voluptatibus? Aspernatur quam rerum suscipit temporibus? Enim obcaecati officiis quos ratione repellat reprehenderit, sapiente unde. Dolore eius hic maiores odit pariatur repudiandae ullam vel! Alias consequuntur, earum fuga harum, ipsa magnam odio, perferendis perspiciatis quibusdam sed soluta voluptates! Ab atque inventore maiores rerum. Maiores minima qui ut. Ab animi aspernatur dolore et id incidunt iusto, labore libero mollitia nemo neque nobis non nulla, obcaecati quaerat recusandae sed sit tempore totam ullam ut vero voluptates. Minima pariatur quia voluptatem voluptatum!</p><div class="tac"><a href="#/create" class="button">Create slideshow</a></div></div>');

  $templateCache.put('modules/directives/breadcrumbs/breadcrumbs.html', '<ul ng-if="breadcrumbs" class="breadcrumbs"><li ng-repeat="breadcrumb in breadcrumbs" class="breadcrumbs__item"><ng-switch on="!!breadcrumb.link"><a ng-href="#{{breadcrumb.link}}" ng-switch-when="true" class="breadcrumbs__link">{{breadcrumb.name}}</a> <span ng-switch-default="" class="breadcrumbs__active">{{breadcrumb.name}}</span></ng-switch></li></ul>');

  $templateCache.put('modules/directives/grid-size/grid-size.html', '<div class="grid-size-block"><button ng-repeat="size in sizes" class="grid-size grid-size_{{size}}" ng-class="{active: size === gridSize}" ng-click="$parent.changeSize(size)">{{$parent.names[size]}}</button></div>');

  $templateCache.put('modules/panel/directives/audio-list/audio-list.html', '<ul class="panel-audios"><li class="panel-audios__item" ng-repeat="audio in audios track by audio.id" title="{{audio.artist + \' - \' + audio.title}}"><span class="panel-audios__info">{{audio.artist + \' - \' + audio.title}}&nbsp;&nbsp;&nbsp;{{audio.duration | timeFormatter}}</span></li></ul>');

  $templateCache.put('modules/panel/directives/frame-list/frame-list.html', '<div class="frame-list__holder"><button class="frame-list__prev" ng-click="prev()" ng-disabled="disabled || prevDisabled"></button><div class="frame-list__wrap"><ul class="frame-list"><li class="frame-list__item" ng-repeat="frame in frames track by frame.id" title="{{frame.title}}" ng-click="removeFrame(frame)"><img ng-src="{{frame.sizes | photoSrc: \'o\' }}"></li></ul><span class="frame-placeholders"><span class="frame-placeholder" ng-repeat="placeholder in placeholders track by $index"></span></span></div><button class="frame-list__next" ng-click="next()" ng-disabled="disabled || nextDisabled"></button></div>');

  $templateCache.put('modules/panel/directives/timeline/timeline.html', '');

  $templateCache.put('modules/player/directives/player-controls/player-controls.html', '<div class="controls" ng-class="{controls_paused: !played}"><button ng-click="toggle()" class="controls__toggle" ng-class="{controls__toggle_pause: played}"></button> <input type="text" ng-model="volume" ng-click="setVolume(volume / 100)"></div>');

}]);