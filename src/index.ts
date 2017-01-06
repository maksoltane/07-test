// definit la liste de imports nécessaires au fonctionnement de la webapp 
import * as angular from 'angular';
import moment from 'moment';
import 'angular-gantt';
import 'angular-moment';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import { Domaines } from './app/components/domain/domaines.component';
import { DomainContract } from './app/components/domaincontract/domaincontract.component';
import { Breadcrumbs } from './app/components/breadcrumbs/breadcrumbs.component';
import { ApiRestService } from './app/services/apiRest.service';
import { Routes } from './app/routes/route.component';

// definit les composants de la webapp "appPlan"
angular
  .module('app', ['ngRoute', 'ngResource', 'angularMoment', 'gantt'])
  .component('ngNavbar', navbar)
  .component('ngBreadcrumbs', Breadcrumbs)
  .component('ngMain', main)
  .component('ngFooter', footer)
  .component('ngDomainContract', DomainContract)
  .component('ngDomain', Domaines)
  // tslint:disable-next-line:typedef
  .run(['$rootScope', ($rootScope) => {
    moment.locale('fr');
  }
  ])
  // définit les services utilisé par la webapp
  .service('ApiRestService', ApiRestService)
  //
  // definit les routes de la webapp
  .config(Routes);

