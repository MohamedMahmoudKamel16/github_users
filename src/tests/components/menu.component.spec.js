/* globals angular beforeEach describe expect it */

const MenuComponentTest = () => {
  let componentController,
    location,
    ctrl;

  describe('Menu component: ', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      componentController = _$injector_.get('$componentController');
      location = _$injector_.get('$location');
      ctrl = componentController('menu', {});
    }));

    it('should have menu controller be defined.', () => {
      expect(ctrl).toBeDefined();
    });

    it('should initialize title properly for home page.', () => {
      location.path('/');
      ctrl.$onInit();
      expect(ctrl.title).toEqual('Home');
    });

    it('should initialize title properly for user page.', () => {
      location.path('/users/mojombo');
      ctrl.$onInit();
      expect(ctrl.title).toEqual('Users');
    });

    it('should change the title.', () => {
      ctrl.changeTitle('Users');
      expect(ctrl.title).toEqual('Users');
    });
  });
};

module.exports = MenuComponentTest;
