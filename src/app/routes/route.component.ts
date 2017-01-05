import 'angular-route';

class Routes {
  static $inject = ['$locationProvider', '$routeProvider'];
  constructor($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when( '/:domain/:contract',
      { template: '<ng-domain-contract></ng-domain-contract>' }
      )
      .when('/:domain',
      { template: '<ng-domain></ng-domain>' }
      )
      .when('/',
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
