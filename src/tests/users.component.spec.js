const UsersComponentTest = function(githubModule) {

	let $ctrl;

	beforeEach( angular.mock.module(githubModule.name) );
	beforeEach(angular.mock.inject((_$componentController_) => {
		$ctrl = _$componentController_('users', {});
		$ctrl.users = { 
			data: [
				{ id: 1, login: 'mohamed', name: 'Mohamed' },
				{ id: 2, login: 'zamzam', name: 'Zamzam' },
				{ id: 3, login: 'test', name: 'Test' }
			]
		};
		$ctrl.$onInit();
	}));


	describe('users.component', () => {

		it('should be defined', () => {
			expect($ctrl).toBeDefined();
		});


		// it('should initialize correctly and redirect to to first user in list', () => {
		// 	let location;
		// 	angular.mock.inject(($location, $stateParams) => { location = $location; });

		// 	expect($ctrl.users).toBeDefined();
		// 	expect($ctrl.users.length).toEqual(3);
		// 	expect($ctrl.since).toEqual(3);
			
		// 	expect(location.$$url).toEqual('/users/mohamed');
		// });


		it('should get users and update since', () => {
			$ctrl.getUsers($ctrl.since);
			expect($ctrl.users).toBeDefined();
			expect($ctrl.users.length).toEqual(3);
			expect($ctrl.since).toEqual(3);
		});


		it('should change url to users/{login}', function() {
			let state;
			angular.mock.inject($state => { state = $state; });
			spyOn(state, 'go');
			$ctrl.goToUser($ctrl.users[1].login);
			expect(state.go).toHaveBeenCalledWith('users.user', { id: 'zamzam' });
		});
	});

};

module.exports = UsersComponentTest;