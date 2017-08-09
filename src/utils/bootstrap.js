/* globals TESTING */

import { COMPONENTS, SERVICES } from './loader';
import ROUTES from '../routes/routes';

export const bootstrap = (githubModule) => {
  Object.keys(COMPONENTS).map(c => githubModule.component(c, COMPONENTS[c]));
  Object.keys(SERVICES).map(s => githubModule.factory(s, SERVICES[s]));

  githubModule.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.rule(($injector, $location) => {
      const path = $location.path();
      const hasTrailingSlash = path[path.length - 1] === '/';
      if (hasTrailingSlash) { return path.substr(0, path.length - 1); }
    });
    ROUTES.map(route => $stateProvider.state(route));
    $urlRouterProvider.otherwise('/');
  });
};


export const test = (githubModule) => {
  if (TESTING) {
    require('angular-mocks/angular-mocks');
    require('../routes/routes.spec.js')(githubModule);
    require('../services/github.service.spec.js')();
    require('../users/users.component.spec.js')();
    require('../users/user/user.component.spec.js')();
    require('../menu/menu.component.spec.js')();
  }
};

