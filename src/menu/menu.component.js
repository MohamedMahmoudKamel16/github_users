const CounterComponent = {
  templateUrl: 'src/menu/menu.template.html',
  controllerAs: 'MC',
  controller($state, $location) {
    const vm = this;

    vm.$onInit = () => {
      const path = $location.$$path.split('/')[1];
      vm.menu_links = [
        { title: 'Home', name: 'home', path: '' },
        { title: 'About', name: 'about', path: 'about' },
        { title: 'Users', name: 'users', path: 'users' },
      ];
      vm.title = (vm.menu_links.find(link => link.path === path)).title;
    };

    vm.changeTitle = (title) => {
      vm.title = title;
    };
  },

};

export default CounterComponent;
