import MenuComponent from '../menu/menu.component';
import UsersComponent from '../users/users.component';
import UserComponent from '../users/user/user.component';
import HomeComponent from '../home/home.component';
import AboutComponent from '../about/about.component';

import GithubService from '../services/github.service';

export const COMPONENTS = {
  menu: MenuComponent,
  users: UsersComponent,
  user: UserComponent,
  home: HomeComponent,
  about: AboutComponent,
};

export const SERVICES = {
  GithubService,
};
