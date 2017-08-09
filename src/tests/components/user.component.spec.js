/* globals angular beforeEach describe expect it spyOn */

const UserComponentTest = () => {
  let componentController,
    stateParams,
    ctrl;

  describe('User component: ', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      componentController = _$injector_.get('$componentController');
      stateParams = _$injector_.get('$stateParams');
      ctrl = componentController('user', {});
    }));

    it('should have user controller be defined.', () => {
      expect(ctrl).toBeDefined();
    });

    it('should be initialized properly.', () => {
      stateParams.id = 'zamzam';
      spyOn(ctrl, 'getUser');
      ctrl.$onInit();
      expect(ctrl.user_attributes).toBeDefined();
      expect(ctrl.user_attributes.length).toEqual(4);
      expect(ctrl.getUser).toHaveBeenCalledWith('zamzam');
    });
  });
};

module.exports = UserComponentTest;
