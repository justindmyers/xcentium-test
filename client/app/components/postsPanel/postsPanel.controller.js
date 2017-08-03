class PostsPanelController {
    constructor($element, DataApi) {
        'ngInject';

        this.DataApi = DataApi;

        $element.addClass('posts-panel');
    }

    updateSorting() {
        this.reverse = false;
        this.sortProperty = 'title';

        if(this.sortCriteria === 'descending') {
            this.reverse = true;
        }
        
        if (this.sortCriteria === '') {
            this.sortProperty = '';
        }
    }
}

export default PostsPanelController;
