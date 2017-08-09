const UserComponent = {
  templateUrl: 'src/templates/users/user.template.html',
  controllerAs: 'USC',
  controller(GithubService, $stateParams) {
    const vm = this;

    vm.$onInit = () => {
      vm.getUser($stateParams.id);
      vm.user_attributes = [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' },
        { key: 'created_at', title: 'Created' },
      ];
    };

    vm.getUser = (login) => {
      GithubService.getUser(login).then((result) => {
        vm.user = result.data;
      });
    };
  },
};

export default UserComponent;
