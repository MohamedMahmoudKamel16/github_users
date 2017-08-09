/* globals angular beforeEach describe expect it spyOn */
import { page1 } from '../data';

const UsersComponentTest = () => {
  let componentController,
    ctrl;

  describe('Users component: ', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      componentController = _$injector_.get('$componentController');
      ctrl = componentController('users', {});
      ctrl.users = { data: page1 };
      ctrl.$onInit();
    }));

    it('should have users controller be defined.', () => {
      expect(ctrl).toBeDefined();
    });

    it('should get new list of users and update since.', () => {
      ctrl.getUsers(ctrl.since);
      expect(ctrl.users).toBeDefined();
      expect(ctrl.users.length).toEqual(10);
      expect(ctrl.since).toEqual(19);
    });

    it('should redirect to url users/{login}.', () => {
      let state;
      angular.mock.inject(($state) => { state = $state; });
      spyOn(state, 'go');
      ctrl.goToUser(ctrl.users[1].login);
      expect(state.go).toHaveBeenCalledWith('users.user', { id: 'defunkt' });
    });
  });
};

module.exports = UsersComponentTest;
