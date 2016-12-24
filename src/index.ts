import * as angular from 'angular';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import 'angular-route';
// definit les modules et les composants de la webapp "appPlan"
angular
    .module('appPlan', ['ngRoute'])
    .component('navbar', navbar)
    .component('main', main)
    .component('footer', footer)
    .config(['$locationProvider' , '$routeProvider',
    function config($locationProvider: any, $routeProvider: any) {
      $locationProvider.hashPrefix('!');
// definit les routes du menu de navigation 
      $routeProvider
      .when('/collaborateurs', {
          template: '<phone-list></phone-list>'
        })
        .when('/domaines', {
          template: '<phone-detail></phone-detail>'
        })
         .when('/', {
          template: '<main></main>'
        })
        .otherwise('/');
    }
  ]);


