import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Needed to use the $stateChangeStart event for the "requiresLogin: true" proprety of angular-jwt
 import 'angular-ui-router/release/stateEvents';
 //import uiGrid from 'angular-ui-grid';

 import toastr from 'angular-toastr';


// import uiSelect from 'ui-select';



// Modules

import { app } from './common/app.module';



// Components
import { rootComponent } from './root.component';

// Services
//import { BaseService } from './services/utils/base.service';


export const root = angular
    .module('root',
        [

            // npm modules
            'templates', // add module template for use html view compiled into one module by brunch (see $templateCache in angularjs doc)
             uiRouter,
             'ui.router.state.events',
            // uiGrid,
            // 'ui.grid.resizeColumns',
            // 'ui.grid.moveColumns',
            // 'ui.grid.pagination',
            // 'ui.grid.autoResize',
            // 'ui.grid.selection',
            // 'ui.grid.exporter',
            // 'ui.grid.treeView',
            // 'ui.grid.edit',
            // 'ui.grid.cellNav',
            // 'ui.grid.grouping',
             toastr,


            //uiSelect,
    
            // apps modules
           app

        ])

    .component('root', rootComponent)
    //.service('baseService', BaseService)

    .config(($urlRouterProvider, $locationProvider, $httpProvider,  toastrConfig,  $qProvider) => {
        'ngInject';

        $qProvider.errorOnUnhandledRejections(false);

        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/'); // force ui-router to load state app and inject html in app component in ui-view div


        // add default header content type
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

         angular.extend(toastrConfig, {
             positionClass: 'toast-bottom-right',
             closeButton: true,
             preventOpenDuplicates: true,
             allowHtml: true
         });
    });

