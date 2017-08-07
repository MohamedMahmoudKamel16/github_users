export const routes = [


	// ==== Home Page Route
	{
		name: 'home', 
		url: '/', 
		component: 'home', 
		data: { title: 'Home Page' }
	},

	// ==== About Page Route
	{
		name: 'about',
		url: '/about',
		component: 'about',
		data: { title: 'About Page' }
	},

	// ==== Users Page Route
	{
		name: 'users',
		url: '/users',
		component: 'users',
		resolve: {
			users: function(GithubService) {
				return GithubService.getUsers(0);
			},
		},
		data: { title: 'Users Page' }
	},

	// ==== Single User Page Route
	{
		name: 'users.user',
		url: '/:id',
		component: 'user',
	}


];
