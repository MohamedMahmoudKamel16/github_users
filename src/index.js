import path from 'path';
import angular from 'angular';
import router from '@uirouter/angularjs';
import bootstrap from './bootstrap';

import MenuComponent from './components/menu.component';
import MainController from './controllers/main.controller';

require('./assets/css/foundation.min.css');
require('./assets/css/main.scss');

var githubModule = angular.module('github', [router]);

bootstrap(githubModule);

	// .controller('MainController', MainController)
	// .component('menu', MenuComponent);
