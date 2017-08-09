const routes = [
  { name: 'home', url: '/', component: 'home' },
  { name: 'about', url: '/about', component: 'about' },
  {
    name: 'users',
    url: '/users',
    component: 'users',
    resolve: {
      users(GithubService) {
        return GithubService.getUsers(0);
      },
    },
  },
  { name: 'users.user', url: '/:id', component: 'user' },
];

export default routes;
