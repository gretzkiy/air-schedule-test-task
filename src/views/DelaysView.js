import BaseView from "./BaseView.js";
import Mustache from 'mustache';
import Schedule from "../modules/Schedule.js"
import tableTemplate from '../templates/schedule.mustache';

export default class MenuView extends BaseView {
    constructor(el) {
        super(el);
    }

    render() {
        this.el.innerHTML = '';

        const delaysSection = document.createElement('section');
        delaysSection.dataset.sectionName = 'delays';

        const div = document.createElement('div');
        div.innerHTML = '<div class="message">Загрузка</div>';
        delaysSection.appendChild(div.firstChild);
        this.el.appendChild(delaysSection);

        const scheduler = new Schedule();
        scheduler.getDelays()
            .then(delays => {
                delays = delays[0].concat(delays[1]);
                const viewData = {
                    "flights": delays,
                    "formatDate": function () {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    }
                }

                const div = document.createElement('div');
                div.innerHTML = Mustache.render(tableTemplate, viewData);
                delaysSection.innerHTML = '';
                delaysSection.appendChild(div.firstChild);

                this.el.appendChild(delaysSection);
            })
            .catch(error => {
                console.log(error);
            });

        Mustache.parse(tableTemplate);
    }
}