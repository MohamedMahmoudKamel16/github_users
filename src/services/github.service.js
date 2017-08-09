const GithubService = ($http) => {
  'ngInject';


  /**
   * [limit description]
   * @type {Number}
   */
  const limit = 10;


  /**
   * Request a list of users from github API with the desired page.
   *
   * @param  {Number} since [last ID requested]
   * @return {Promise}
   */
  const getUsers = (since = 0) => $http.get(`https://api.github.com/users?since=${since}&per_page=${limit}`, { cache: true });


  /**
   * Request a single user from github API.
   *
   * @param  {String} login [User login name]
   * @return {Promise}
   */
  const getUser = login => $http.get(`https://api.github.com/users/${login}`, { cache: true });


  return {
    getUsers,
    getUser,
  };
};

export default GithubService;
