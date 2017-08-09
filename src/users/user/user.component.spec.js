/* globals angular beforeEach describe expect it spyOn */

const UserComponentTest = () => {
  let componentController,
    stateParams,
    GithubService,
    q,
    ctrl;

  describe('User component: ', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      componentController = _$injector_.get('$componentController');
      stateParams = _$injector_.get('$stateParams');
      GithubService = _$injector_.get('GithubService');
      q = _$injector_.get('$q');
      ctrl = componentController('user', {});
    }));

    it('should have user controller be defined.', () => {
      expect(ctrl).toBeDefined();
    });

    it('should be initialized properly.', () => {
      stateParams.id = 'macournoyer';
      spyOn(ctrl, 'getUser');
      ctrl.$onInit();
      expect(ctrl.user_attributes).toBeDefined();
      expect(ctrl.user_attributes.length).toEqual(4);
      expect(ctrl.getUser).toHaveBeenCalledWith('macournoyer');
    });

    it('should get user.', () => {
      spyOn(GithubService, 'getUser').and.returnValue(q.resolve({}));
      ctrl.$onInit();
      ctrl.getUser('macournoyer');
      expect(GithubService.getUser).toHaveBeenCalled();
    });
  });
};

module.exports = UserComponentTest;
