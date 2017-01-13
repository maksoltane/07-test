// imports modules externes 
import * as angular from 'angular';
import moment from 'moment';
import 'angular-moment';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-plugins.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-dependencies-plugin.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-tooltips-plugin.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-bounds-plugin.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-progress-plugin.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-groups-plugin.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-table-plugin.js';
import 'jspm_packages/bower/angular-gantt@1.3.0/assets/angular-gantt-resizeSensor-plugin.js';



// import modules internes 
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import { Domaines } from './app/components/domain/domaines.component';
import { DomainContract } from './app/components/domaincontract/domaincontract.component';
import { Breadcrumbs } from './app/components/breadcrumbs/breadcrumbs.component';
import { ApiRestService } from './app/services/apiRest.service';
import { Routes } from './app/routes/route.component';
import { gantt } from './app/components/gantt/gantt.component';

// liste des composants 
angular
  .module('app', ['ngRoute',
    'ngResource',
    'gantt',
    'gantt.tooltips',
    'gantt.bounds',
    'gantt.progress',
    'gantt.table',
    'gantt.groups',
    'gantt.resizeSensor'])
  .component('ngNavbar', navbar)
  .component('ngBreadcrumbs', Breadcrumbs)
  .component('ngMain', main)
  .component('ngGantt', gantt)
  .component('ngFooter', footer)
  .component('ngDomainContract', DomainContract)
  .component('ngDomain', Domaines)
  .run(['$rootScope', ($rootScope) => {
    moment.locale('fr');
  }
  ])
  // liste des services
  .service('ApiRestService', ApiRestService)
  // route
  .config(Routes);

