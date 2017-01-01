export interface Idata {

}
class ApiRestService implements Idata {
  static $inject = ['$http'];

  // tslint:disable-next-line:no-empty
  constructor(private $http: ng.IHttpService) {// tslint:disable-next-line:no-trailing-whitespace 
    }

  getfilm(ndf: string): ng.IPromise<Idata > {
            return this.$http({ method: 'GET', url: 'http://www.omdbapi.com/?t=' + ndf + '&y=&plot=short&r=json&tomatoes=true'})
                // tslint:disable-next-line:no-empty
.then ((response: ng.IHttpPromiseCallbackArg<Idata>): Idata => {
  return response.data;
});



  }

}
export { ApiRestService };

