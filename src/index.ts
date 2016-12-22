import * as angular from 'angular';
import {navbar} from './app/navbar/navbar.component';
import {main} from './app/main/main.component';
import {footer} from './app/footer/footer.component';


angular
    .module('app', [])
    .component('navbar', navbar)
    .component('app', main)
    .component('footer', footer);


