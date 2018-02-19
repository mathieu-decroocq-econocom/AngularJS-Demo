import angular from 'angular';

import { root } from './root.module';

angular.element(document).ready(() => {
    angular.bootstrap(document, [root.name], {
        strictDi: true
    });
});