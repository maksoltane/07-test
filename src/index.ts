import * as angular from 'angular';
import { navbar } from './app/components/navbar/navbar.component';
import { main } from './app/components/main/main.component';
import { footer } from './app/components/footer/footer.component';
import 'angular-animate';


angular
    .module('app', [])
    .component('navbar', navbar)
    .component('main', main)
    .component('footer', footer);


