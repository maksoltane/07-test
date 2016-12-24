import * as angular from 'angular';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import { domaines } from './app/components/domaines/domaines.component';
import { collaborateurs} from './app/components/collaborateurs/collaborateurs.component';
import 'angular-route';
// definit les modules et les composants de la webapp "appPlan"
angular
    .module('appPlan', ['ngRoute'])
    .component('navbar', navbar)
    .component('main', main)
    .component('footer', footer)
    .component('collaborateurs', collaborateurs)
    .component('domaines', domaines)
    .config(['$locationProvider' , '$routeProvider',
    function config($locationProvider: any, $routeProvider: any) {
// definit les routes du menu de navigation 
      $routeProvider
      .when('/collaborateurs', {
          template: '<collaborateurs></collaborateurs>'
        })
        .when('/domaines', {
          template: '<domaines></domaines>'
        })
         .when('/', {
          template: '<main></main>'
        })
        .otherwise('/');
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }
  ]);


