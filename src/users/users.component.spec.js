/* globals angular beforeEach describe expect it spyOn */
import { page1 } from '../utils/data';

const UsersComponentTest = () => {
  let q,
    ctrl,
    state,
    GithubService,
    componentController;

  describe('Users component: ', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      q = _$injector_.get('$q');
      state = _$injector_.get('$state');
      GithubService = _$injector_.get('GithubService');
      componentController = _$injector_.get('$componentController');
      ctrl = componentController('users', {});
    }));

    it('should have users controller be defined.', () => {
      expect(ctrl).toBeDefined();
    });

    it('should be initialized properly.', () => {
      ctrl.users = { data: page1 };
      ctrl.$onInit();
      expect(ctrl.users).toBeDefined();
      expect(ctrl.since).toEqual(19);
    });

    it('should get new list of users and update since.', () => {
      ctrl.since = 19;
      spyOn(GithubService, 'getUsers').and.returnValue(q.resolve({}));
      ctrl.getUsers(ctrl.since);
      expect(GithubService.getUsers).toHaveBeenCalledWith(19);
    });

    it('should redirect to url users/{login}.', () => {
      spyOn(state, 'go');
      ctrl.goToUser(page1[0].login);
      expect(state.go).toHaveBeenCalledWith('users.user', { id: 'mojombo' });
    });
  });
};

module.exports = UsersComponentTest;
