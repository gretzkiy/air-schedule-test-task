import Mustache from 'mustache';
import BaseView from './BaseView';
import Schedule from '../modules/Schedule';
import tableTemplate from '../templates/schedule.mustache';

export default class MenuView extends BaseView {
    render() {
        this.el.innerHTML = '';

        const delaysSection = document.createElement('section');
        delaysSection.dataset.sectionName = 'delays';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Загрузка</div>';
        delaysSection.appendChild(divLoad.firstChild);
        this.el.appendChild(delaysSection);

        const scheduler = new Schedule();
        scheduler.getDelays()
            .then(_delays => {
                const delays = _delays[0].concat(_delays[1]);
                const viewData = {
                    flights: delays,
                    formatDate() {
                        const time = new Date(this);
                        const localTime = time.toLocaleString('ru');
                        return localTime;
                    },
                };

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
