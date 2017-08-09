/* globals angular beforeEach describe expect it */
import { page1, page2 } from '../data';

const GithubServiceTest = () => {
  let service,
    httpBackend;

  describe('Github service test suite:', () => {
    beforeEach(angular.mock.inject((_$injector_) => {
      service = _$injector_.get('GithubService');
      httpBackend = _$injector_.get('$httpBackend');
    }));

    it('should get the first page of users.', () => {
      let users;
      httpBackend.whenGET('https://api.github.com/users?since=0&per_page=10').respond(page1);
      service.getUsers(0).then((result) => {
        users = result.data;
        expect(users[0].login).toEqual('mojombo');
        expect(users[9].login).toEqual('brynary');
        expect(users[10]).not.toBeDefined();
      });
      httpBackend.flush();
    });

    it('should get the second page of users.', () => {
      httpBackend.whenGET('https://api.github.com/users?since=19&per_page=10').respond(page2);
      service.getUsers(19).then((result) => {
        expect(result.data[0].login).toEqual('kevinclark');
        expect(result.data[9].login).toEqual('fanvsfan');
        expect(result.data[10]).not.toBeDefined();
      });
      httpBackend.flush();
    });

    it('should get user.', () => {
      httpBackend.whenGET('https://api.github.com/users/mojombo').respond(page1[0]);
      httpBackend.whenGET('https://api.github.com/users/wycats').respond(page2[3]);
      service.getUser('mojombo').then((result) => { expect(result.data.id).toEqual(1); });
      service.getUser('wycats').then((result) => { expect(result.data.id).toEqual(23); });
      httpBackend.flush();
    });
  });
};

module.exports = GithubServiceTest;
