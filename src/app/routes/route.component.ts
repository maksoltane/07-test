import 'angular-route';

class Routes {
  static $inject = ['$locationProvider', '$routeProvider'];
  constructor($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/collaborateurs',
      { template: '<ng-collaborateurs-liste></ng-collaborateurs-liste>' }
      )
      .when('/collaborateurs/:collaborateursId',
      { template: '<ng-collaborateurs-liste></ng-collaborateurs-liste>' }
      )
      .when('/domaines',
      { template: '<ng-domaines-liste></ng-domaines-liste>' }
      )
      .when('/domaines/:domaineId',
      { template: '<ng-domaines-liste></ng-domaines-liste>' }
      )
      .when('/',
      { template: '<ng-main></ng-main>' }
      )
      .when('/mainId',
      { template: '<ng-main></ng-main>' }
      )
      .otherwise(
      { redirectTo: '/' }
      );
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
    console.log('init Routes');
    console.log(window.location.host);
  }

}

export { Routes };
