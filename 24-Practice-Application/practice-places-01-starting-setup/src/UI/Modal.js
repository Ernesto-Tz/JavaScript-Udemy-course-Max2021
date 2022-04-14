export class Modal {
    constructor ( contentId, fallbackText) {
        this.fallbackText = fallbackText;
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template')
    }

    show () {
        // Explorer does not support Templates,
        // this will fail in Explorer since it won't be able to create a template
        // if there is no template there is no content tag.
        if ('content' in document.createElement('template')) {
            const modalElements = document.importNode(this.modalTemplateEl.content, true);
            // we turned modalElement and backdropElement into properties 
            // const modalElement = modalElements.querySelector('.modal');
            // const backdropElement = modalElements.querySelector('.backdrop');
            this.modalElement = modalElements.querySelector('.modal');
            this.backdropElement = modalElements.querySelector('.backdrop');
            const contentElement = document.importNode(this.contentTemplateEl.content, true);

            this.modalElement.appendChild(contentElement);

            document.body.insertAdjacentElement('afterbegin', this.modalElement);
            document.body.insertAdjacentElement('afterbegin', this.backdropElement);
        } else {
            // fallback code
            alert(this.fallbackText)
        }
    }
    
    hide () {
        if (this.modalElement) {
            document.body.removeChild(this.modalElement);
            document.body.removeChild(this.backdropElement);
            this.modalElement = null;
            this.backdropElement = null;
        }
    }
}