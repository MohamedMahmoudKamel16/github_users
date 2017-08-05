import CONTROLLERS from './controllers';
import COMPONENTS from './components';
import { routes as ROUTES } from './routes.js';

const bootstrap = (githubModule) => {

	Object.keys(CONTROLLERS).map((c) => githubModule.controller(c, CONTROLLERS[c]) );
	Object.keys(COMPONENTS).map((c) => githubModule.component(c, COMPONENTS[c]) );

	githubModule.config(($stateProvider, $urlRouterProvider) => {
		ROUTES.map((route) => { $stateProvider.state(route) });
	});
};

export default bootstrap;
