import 'angular-resource';

class ApiRestService {
  static $inject: string[] = ['$resource'];
  private _queryConfig: ng.resource.IActionHash = {
    query: {
      method: 'GET',
      // get user key
      headers: { key: '08YWRtaW5pdG90bw==' },
      // api returns an array
      isArray: true
    }
  };
  constructor(private $resource: ng.resource.IResourceService) { }

  GetdatafromREST(param: string,
    success: (data: any) => any,
    error?: (err: any) => any
  ): ng.IPromise<any> {
    return this.$resource('http://teambox.cds-lille.easylis.intra/teambox/resource-rest/V1_1/' + param, null, this._queryConfig)
      .query()
      .$promise
      .then(success, error);
  };

}

export { ApiRestService };

// ------ Test service api Rest avec $http -----
// class ApiRestService {
//   static $inject: string[] = ['$http'];
//   // tslint:disable-next-line:no-empty
//   constructor(private $http: ng.IHttpService) { }
//   getfilm(ndf: string): ng.IPromise<any> {
//     return this.$http({ method: 'GET', headers: { key: '08YWRtaW5pdG90bw==' }, url: 'http://teambox.cds-lille.easylis.intra/teambox/resource-rest/V1_1/' + ndf })
//       // tslint:disable-next-line:no-empty
//       .then((response: ng.IHttpPromiseCallbackArg<any>): any => {
//         return response.data;
//       });
//   }
// }
// { method: 'GET', headers: { key: '08YWRtaW5pdG90bw==' }, url: 'http://teambox.cds-lille.easylis.intra/teambox/resource-rest/V1_1/' + ndf }



