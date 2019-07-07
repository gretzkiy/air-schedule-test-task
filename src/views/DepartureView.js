import Mustache from 'mustache';
import BaseView from './BaseView';
import Schedule from '../modules/Schedule';
import tableTemplate from '../templates/schedule.mustache';

export default class MenuView extends BaseView {
    render() {
        this.el.innerHTML = '';

        const departureSection = document.createElement('section');
        departureSection.dataset.sectionName = 'departure';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Загрузка</div>';
        departureSection.appendChild(divLoad.firstChild);
        this.el.appendChild(departureSection);

        const scheduler = new Schedule();
        scheduler.getSchedule('departure')
            .then(schedule => {
                const viewData = {
                    flights: schedule,
                    formatDate() {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    },
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

    show(pararms) {
        const tab = document.querySelector('.tab[href="/departure"');
        tab.classList.add('active');

        super.show(pararms);
    }

    hide() {
        const tab = document.querySelector('.tab[href="/departure"');
        tab.classList.remove('active');

        super.hide();
    }
}
