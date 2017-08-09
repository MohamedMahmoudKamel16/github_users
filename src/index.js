/* globals TESTING */
import angular from 'angular';
import router from '@uirouter/angularjs';
import bootstrap from './bootstrap';

require('./assets/css/main.scss');
require('./assets/css/foundation.flex.min.css');


const githubModule = angular.module('github', [router]);


bootstrap(githubModule);

if (TESTING) {
  require('angular-mocks/angular-mocks');
  require('./tests/routing.spec.js')(githubModule);
  require('./tests/services/github.service.spec.js')();
  require('./tests/components/users.component.spec.js')();
  require('./tests/components/user.component.spec.js')();
  require('./tests/components/menu.component.spec.js')();
}
