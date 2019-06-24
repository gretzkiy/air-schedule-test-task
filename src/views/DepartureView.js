import BaseView from './BaseView.js';
import Schedule from '../modules/Schedule.js';
import Mustache from 'mustache';
import tableTemplate from '../templates/schedule.mustache';

export default class MenuView extends BaseView {
    constructor(el) {
        super(el);
    }

    render() {
        this.el.innerHTML = '';

        const departureSection = document.createElement('section');
        departureSection.dataset.sectionName = 'departure';

        const div = document.createElement('div');
        div.innerHTML = '<div class="message">Загрузка</div>';
        departureSection.appendChild(div.firstChild);
        this.el.appendChild(departureSection);

        const scheduler = new Schedule();
        scheduler.getSchedule('departure')
            .then(schedule => {
                const viewData = {
                    'flights': schedule,
                    'formatDate': function() {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    }
                };
                
                const div = document.createElement('div');
                div.innerHTML = Mustache.render(tableTemplate, viewData);
                departureSection.innerHTML = '';
                departureSection.appendChild(div.firstChild);

                this.el.appendChild(departureSection);
            })
            .catch(error => {
                console.log(error);
            });
        
        Mustache.parse(tableTemplate);
    }
}