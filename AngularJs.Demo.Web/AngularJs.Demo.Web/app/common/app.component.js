import './app.html';

class AppController {

    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    $onInit() {
        this.$state.go('app');
    }
}

export const appComponent = {
    templateUrl: 'app/common/app.html',
    controller: AppController
};
