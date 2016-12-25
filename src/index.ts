import * as angular from 'angular';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import { domaines } from './app/components/domaines/domaines.component';
import { collaborateurs } from './app/components/collaborateurs/collaborateurs.component';
import 'angular-route';

// definit les modules et les composants de la webapp "appPlan"
angular
  .module('appPlan', ['ngRoute'])
  .component('navbar', navbar)
  .component('main', main)
  .component('footer', footer)
  .component('collaborateursListe', collaborateurs)
  .component('domainesListe', domaines)

  // definit les routes de la webapp
  .config(['$locationProvider', '$routeProvider', ($locationProvider: any, $routeProvider: ng.route.IRouteProvider) => {
      $routeProvider
        .when('/collaborateurs', {
          template: '<collaborateurs-liste></collaborateurs-liste>'
        })
         .when('/collaborateurs/:collaborateursId', {
          template: '<collaborateurs-liste></collaborateurs-liste>'
        })
        .when('/domaines', {
          template: '<domaines-liste></domaines-liste>'
        })
        .when('/domaines/:domaineId', {
          template: '<domaines-liste></domaines-liste>'
        })
        .when('/', {
          template: '<main></main>'
        })
        .when('/mainId', {
          template: '<main></main>'
        })
        .otherwise('/');
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
    }
  ]);

