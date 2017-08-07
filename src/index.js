import path from 'path';
import angular from 'angular';
import router from '@uirouter/angularjs';
import bootstrap from './bootstrap';

import GithubService from './services/GithubService'; // TODO

require('./assets/css/main.scss');
require('./assets/css/foundation.flex.min.css');


var githubModule = angular.module('github', [router]);


bootstrap(githubModule);


if (TESTING) {
	require('angular-mocks/angular-mocks');
	require('./tests/users.component.spec.js')(githubModule);
}
