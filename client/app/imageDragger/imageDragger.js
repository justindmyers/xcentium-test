import './imageDragger.styl';

export default class ImageDragger {
    constructor(query, useWrapper = false) {
        if(typeof query === 'undefined' || query == '') {
            throw 'Must provide a valid query selector for ImageDragger';
        }

        // We can't use array operations on NodeLists, so we make our own
        this.elementsList = [];

        let elements = document.querySelectorAll(query);

        if(typeof elements.forEach !== 'undefined') {
            elements.forEach(element => this._addEventListeners(element, useWrapper));
        } else {
            Array.prototype.forEach.call(elements, element => this._addEventListeners(element, useWrapper));
        }

        this.lastDrag = undefined;
        this.touchedElement = undefined;
    }

    onStartDrag(event) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData("text/plain", event.target.src);

        this.lastDrag = event.target;
    }

    onDrop(event) {
        if(typeof this.lastDrag !== 'undefined') {
            this._swapImages(event.target, this.lastDrag);
        }
        
        event.preventDefault();
    }

    onDragOver(event) {
        event.preventDefault();
    }

    onTouchMove(event) {
        let touchedElement = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);

        if(this.elementsList.filter(element => element === touchedElement).length && event.target !== touchedElement) {
            this.touchedElement = touchedElement;
        } else {
            this.touchedElement = undefined;
        }
    }

    onTouchEnd(event) {
        if(typeof this.touchedElement !== 'undefined') {
            this._swapImages(event.target, this.touchedElement)
        }
    }

    onTouchCancel(event) {
        this.touchedElement = undefined;
    }

    _addEventListeners(element, useWrapper) {
        element.setAttribute('draggable', true);
        element.addEventListener('dragstart', this.onStartDrag.bind(this));
        element.addEventListener('drop', this.onDrop.bind(this));
        element.addEventListener('dragover', this.onDragOver.bind(this));

        element.addEventListener('touchmove', this.onTouchMove.bind(this));
        element.addEventListener('touchend', this.onTouchEnd.bind(this));
        element.addEventListener('touchcancel', this.onTouchCancel.bind(this));

        if(useWrapper) {
            let wrapper = document.createElement('div');
            
            wrapper.setAttribute('image-dragger-wrapper', '');
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
        }

        this.elementsList.push(element);
    }

    _swapImages(sourceElement, targetElement) {
        let temp = sourceElement.src;

        sourceElement.src = targetElement.src;
        targetElement.src = temp;

        targetElement = undefined;
    }
}