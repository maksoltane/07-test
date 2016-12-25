class Routes {

  constructor($locationProvider:  ng.ILocationProvider , $routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/collaborateurs',
      {template: '<collaborateurs-liste></collaborateurs-liste>'}
        )
      .when('/collaborateurs/:collaborateursId',
      {template: '<collaborateurs-liste></collaborateurs-liste>'}
        )
      .when('/domaines',
      {template: '<domaines-liste></domaines-liste>'}
        )
      .when('/domaines/:domaineId',
      {template: '<domaines-liste></domaines-liste>'}
      )
      .when('/',
      {template: '<main></main>'}
        )
      .when('/mainId',
      {template: '<main></main>'}
      )
      .otherwise(
        {redirectTo: '/'}
        );
         // use the HTML5 History API
      $locationProvider.html5Mode(true);
      console.log('init Routes');
  }

}

Routes.$inject = ['$locationProvider', '$routeProvider'];

export { Routes };
