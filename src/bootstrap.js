import COMPONENTS from './components';
import SERVICES from './services';
import ROUTES from './routes';

const bootstrap = (githubModule) => {
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

export default bootstrap;
