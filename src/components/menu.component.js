const CounterComponent = {
	templateUrl: 'src/templates/menu.template.html',
	controllerAs: 'MC',
	controller: function($scope, $state, $rootScope) {

		const vm = this;

		vm.$onInit = function() {
			console.log($state.current);
			vm.title = $state.current.data.title || 'Users Page';
			vm.menu_links = [
				{ title: 'Home', 'name': 'home' },
				{ title: 'About', 'name': 'about' },
				{ title: 'Users', 'name': 'users' }
			];
		};


		$scope.$on('$locationChangeStart', function() { 
			vm.title = $state.current.data.title;
		});


	},
};

export default CounterComponent;