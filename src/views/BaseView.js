export default class BaseView {
    constructor(el) {
        this.el = el;

        this.el.dataset.view = this.constructor.name;
        this.el.hidden = true;
    }

    get active() {
        return !this.el.hidden;
    }

    hide() {
        this.el.hidden = true;
    }

    show(params) {
        this.render(params);
        this.el.hidden = false;
    }

    render() {
        throw new Error('This method must be impemented!');
    }
}