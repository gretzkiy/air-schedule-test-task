import Mustache from 'mustache';
import BaseView from './BaseView';
import Schedule from '../modules/Schedule';
import tableTemplate from '../templates/schedule.mustache';

export default class MenuView extends BaseView {
    render() {
        this.el.innerHTML = '';

        const arrivalSection = document.createElement('section');
        arrivalSection.dataset.sectionName = 'arrival';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Загрузка</div>';
        arrivalSection.appendChild(divLoad.firstChild);
        this.el.appendChild(arrivalSection);

        const scheduler = new Schedule();
        scheduler.getSchedule('arrival')
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
                arrivalSection.innerHTML = '';
                arrivalSection.appendChild(div.firstChild);

                this.el.appendChild(arrivalSection);
            })
            .catch(error => {
                console.log(error);
            });

        Mustache.parse(tableTemplate);
    }

    show(pararms) {
        const tab = document.querySelector('.tab[href="/arrival"');
        tab.classList.add('active');

        super.show(pararms);
    }

    hide() {
        const tab = document.querySelector('.tab[href="/arrival"');
        tab.classList.remove('active');

        super.hide();
    }
}
