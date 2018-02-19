import './app.html';

class AppController {

    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    $onInit() {
        this.data = 'TEST 2';
    }
}

export const appComponent = {
    templateUrl: 'app/common/app.html',
    controller: AppController
};
