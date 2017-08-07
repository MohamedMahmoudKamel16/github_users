const UserComponent = {
	bindings: {
		zamzam: '<'
	},
	templateUrl: 'src/templates/users/user.template.html',
	controllerAs: 'USC',
	controller: function(GithubService, $stateParams, $state){
		
		const vm = this;
		
		vm.init = function() {
			($stateParams.id) && (vm.getUser($stateParams.id));
			vm.user_attributes = [ 
				{ key: 'id', title: 'ID' },
				{ key: 'name', title: 'Name'},
				{ key: 'email', title: 'Email' },
				{ key: 'created_at', title: 'Created' } 
			];
		};


		vm.getUser = (login) => { 
			GithubService.getUser(login).then((result) => {
				vm.user = result.data;
			});
		};


		vm.goToUser = (login) => {
			$state.go('users.user', { id: login });
		};


		// ==== Start Controller
		vm.init();
	}
};

export default UserComponent;