const UsersComponent = {
	bindings: {
    	users: '<'
  	},
	templateUrl: 'src/templates/users/list.template.html',
	controllerAs: 'UC',
	controller: function($state, $stateParams, GithubService, $location) {

		const vm = this;

		vm.$onInit = () => {
			vm.users = vm.users.data;
			vm.since = vm.users[vm.users.length - 1]['id'];
			(! $stateParams.id) && (vm.goToUser(vm.users[0]['login']));
		};


		vm.getUsers = (since) => {
			GithubService.getUsers(since).then((result) => {
				vm.users = vm.users.concat(result.data);
				vm.since = vm.users[vm.users.length - 1]['id'];
			});
		};


		vm.goToUser = (login) => {
			$state.go('users.user', { id: login });
		};


		vm.loadMore = () => {
			vm.getUsers(vm.since);
		}


	},
};

export default UsersComponent;
