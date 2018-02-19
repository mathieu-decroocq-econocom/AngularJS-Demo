
import appComponent from "./app.component";

//import { programsGrid } from './programs-grid/programs-grid.module';

export const app = angular
    .module('app',
    [
        //programsGrid
    ])
    .component('appComponent', appComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('app', {
                url: '/',
                component: 'appComponent'
            });
        })
    .name;
