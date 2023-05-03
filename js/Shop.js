class Shop {
    constructor(selector, list) {
        this.name = 'Zuikio parduotuve';
        this.selector = selector;
        this.list = list;
        this.DOM = null;

        this.init();
    }

    init() {
        // bandys surasti DOM elementa
        const found = this.findTargetElement();
        if (!found) {
            return false;
        }

        // sugeneruoti HMTL
        this.render();

        // sudeti event listener'ius
        this.addEvents();
    }

    findTargetElement() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }

        this.DOM = document.getElementById(this.selector);
        return !!this.DOM;
    }

    render() {
        let HTML = '';

        for (const item of this.list) {
            HTML += `<li>${item}</li>`;
        }

        this.DOM.innerHTML = HTML;
    }

    addEvents() {
        const htmlItemList = this.DOM.querySelectorAll('li');

        // for (const item of htmlItemList) {
        //     item.addEventListener('click', (function () {
        //         console.log(`${this.name}: ${item.innerText}.`);
        //     }).bind(this));
        // }

        for (const item of htmlItemList) {
            item.addEventListener('click', (event) => {
                console.log(`${this.name}: ${event.target.innerText}.`);
            });
        }
    }
}

export { Shop };