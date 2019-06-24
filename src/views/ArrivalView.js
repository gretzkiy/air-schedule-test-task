import BaseView from './BaseView.js';
import Mustache from 'mustache';
import Schedule from '../modules/Schedule.js';
import tableTemplate from '../templates/schedule.mustache';

export default class MenuView extends BaseView {
    constructor(el) {
        super(el);
    }

    render() {
        this.el.innerHTML = '';

        const arrivalSection = document.createElement('section');
        arrivalSection.dataset.sectionName = 'arrival';

        const div = document.createElement('div');
        div.innerHTML = '<div class="message">Загрузка</div>';
        arrivalSection.appendChild(div.firstChild);
        this.el.appendChild(arrivalSection);

        const scheduler = new Schedule();
        scheduler.getSchedule('arrival')
            .then(schedule => {
                const viewData = {
                    'flights': schedule,
                    'formatDate': function () {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    }
                };

                const div = document.createElement('div');
                div.innerHTML = Mustache.render(tableTemplate, viewData);
                arrivalSection.innerHTML = '';
                arrivalSection.appendChild(div.firstChild);

                this.el.appendChild(arrivalSection);
            })
            .catch(error => {
                console.log(error);
            }); 

        Mustache.parse(tableTemplate);
    }
}