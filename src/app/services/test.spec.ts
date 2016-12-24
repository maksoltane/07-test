import * as angular from 'angular';
import 'angular-mocks';
import {test} from './test';

describe('test component', () => {
  beforeEach(() => {
    angular
      .module('test', ['src/app/test.html'])
      .component('test', test);
    module('test');
  });

  it('should...', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<test></test>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
