'use strict';
import * as angular from 'angular';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import { domaines } from './app/components/domaines/domaines.component';
import { collaborateurs } from './app/components/collaborateurs/collaborateurs.component';
import { Breadcrumbs } from './app/components/breadcrumbs/breadcrumbs.component';
import { ApiRestService } from './app/services/apiRest.service';

import { Routes } from './app/routes/route.component';
// definit les modules et les composants de la webapp "appPlan"
angular
  .module('app', ['ngRoute'])
  .component('ngNavbar', navbar)
  .component('ngBreadcrumbs', Breadcrumbs)
  .component('ngMain', main)
  .component('ngFooter', footer)
  .component('ngCollaborateursListe', collaborateurs)
  .component('ngDomainesListe', domaines)

  // définit les services utilisé par la webapp
  .service('ApiRestService', ApiRestService)
  // definit les routes de la webapp
  .config(Routes);

