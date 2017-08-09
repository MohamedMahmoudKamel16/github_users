import angular from 'angular';
import router from '@uirouter/angularjs';
import { bootstrap, test } from './utils/bootstrap';

require('./assets/css/main.scss');
require('./assets/css/foundation.min.css');


const githubModule = angular.module('github', [router]);


bootstrap(githubModule);
test(githubModule);
