const GithubService = ($http) => {
	"ngInject";

	/**
	 * Last ID requested.
	 * @type {Number}
	 */
	let since = 0;


	/**
	 * [limit description]
	 * @type {Number}
	 */
	let limit = 10;

	
	/**
	 * Request a list of users from github API with the desired page.
	 * 
	 * @param  {Number} since [last ID requested]
	 * @return {Promise}
	 */
	const getUsers = (since = 0) => {
		return $http.get(`https://api.github.com/users?since=${since}&per_page=${limit}`, { cache: true });
	};


	/**
	 * Request a single user from github API.
	 * 
	 * @param  {String} login [User login name]
	 * @return {Promise}
	 */
	const getUser = (login) => {
		return $http.get(`https://api.github.com/users/${login}`, { cache: true });
	};


	return {
		getUsers,
		getUser
	};

};

export default GithubService;
