import './root.html'; // force load html templates cache module

class RootController {
    constructor($state) {
        'ngInject';
        this.$state = $state;
    }

    $onInit() {
        this.$state.go('app');
    }
}

export const rootComponent = {
    templateUrl: 'app/root.html', // put the path of html file (see templates.js file)
    controller: RootController
};

