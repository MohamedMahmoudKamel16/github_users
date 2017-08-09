/* globals angular beforeEach describe it expect spyOn */

const RoutingTest = (githubModule) => {
  beforeEach(angular.mock.module(githubModule.name));

  let state,
    location,
    rootScope,
    GithubService;

  const goTo = (url) => {
    location.path(url);
    rootScope.$digest();
  };

  describe('When navigating to:', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      state = _$injector_.get('$state');
      location = _$injector_.get('$location');
      rootScope = _$injector_.get('$rootScope');
      GithubService = _$injector_.get('GithubService');
    }));

    it('[/] should go to home state.', () => {
      goTo('/');
      expect(state.current.name).toBe('home');
    });

    it('[/about] should go to about state.', () => {
      goTo('/about');
      expect(state.current.name).toBe('about');
    });

    it('[/users] it should route to users.component.', () => {
      spyOn(GithubService, 'getUsers');
      goTo('/users');
      expect(GithubService.getUsers).toHaveBeenCalled();
      expect(state.current.name).toEqual('users');
    });

    it('[/users/login] it should route to user.component.', () => {
      spyOn(GithubService, 'getUsers');
      goTo('/users/mojombo');
      expect(GithubService.getUsers).toHaveBeenCalled();
      expect(state.current.name).toEqual('users.user');
    });

    it('[/other/url] should redirect to home state.', () => {
      goTo('/other/url');
      expect(state.current.name).toBe('home');
    });

    it('[/about/] should remove trailing slash.', () => {
      goTo('/about/');
      expect(location.$$path).toBe('/about');
    });
  });
};

module.exports = RoutingTest;
