class NavbarController {
    constructor($element, $route) {
        'ngInject';

        $element.addClass('navbar');

        this.$route = $route;
    }
}

export default NavbarController;
