'use strict';
import * as angular from 'angular';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import { domaines } from './app/components/domaines/domaines.component';
import { collaborateurs } from './app/components/collaborateurs/collaborateurs.component';
import { Breadcrumbs } from './app/components/breadcrumbs/breadcrumbs.component';
import 'angular-route';
import 'angular-crumble';

import { Routes } from './app/routes/route.component';
// definit les modules et les composants de la webapp "appPlan"
angular
  .module('appPlan', ['ngRoute', 'crumble'])
  .component('navbar', navbar)
  .component('breadcrumbs', Breadcrumbs)
  .component('main', main)
  .component('footer', footer)
  .component('collaborateursListe', collaborateurs)
  .component('domainesListe', domaines)

  // definit les routes de la webapp
  .config(Routes);

