import Mustache from 'mustache';
import BaseView from './BaseView';
import Schedule from '../modules/Schedule';
import tableTemplate from '../templates/schedule.mustache';
import showSummary from '../modules/Summary';

export default class SearchView extends BaseView {
    render(params) {
        this.el.innerHTML = '';

        const searchSection = document.createElement('section');
        searchSection.dataset.sectionName = 'search';

        const divLoad = document.createElement('div');
        divLoad.innerHTML = '<div class="message">Выполняется поиск</div>';
        searchSection.appendChild(divLoad.firstChild);
        this.el.appendChild(searchSection);

        if (!params) {
            const searchParams = new URLSearchParams(window.location.href.split('?')[1]);
            // eslint-disable-next-line no-param-reassign
            params = searchParams.get('search');
        }

        const scheduler = new Schedule();
        if (params) {
            scheduler.search(params)
                .then(_results => {
                    const results = _results[0].concat(_results[1]);
                    if (results.length > 0) {
                        const viewData = {
                            flights: results,
                            formatDate() {
                                const time = new Date(this);
                                const localTime = time.toLocaleString('ru');
                                return localTime;
                            },
                        };

                        // eslint-disable-next-line no-shadow
                        const div = document.createElement('div');
                        div.innerHTML = Mustache.render(tableTemplate, viewData);
                        searchSection.innerHTML = `<div class="message">Результаты поиска по запросу &nbsp<b>${params}</b>:</div>`;
                        searchSection.appendChild(div.firstChild);

                        this.el.appendChild(searchSection);
                    } else {
                        this.noEntriesFound(searchSection, params);
                    }
                })
                .then(() => {
                    const rows = document.getElementsByClassName('row');
                    [...rows].forEach(row => {
                        row.addEventListener('click', event => {
                            showSummary({ flightNumber: event.currentTarget.dataset.flightNumber });
                        });
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            this.noEntriesFound(searchSection, params);
        }

        Mustache.parse(tableTemplate);
    }

    noEntriesFound(searchSection, params) {
        const div = document.createElement('div');
        if (/^\s+$/.test(params) || !params) {
            div.innerHTML = '<div class="message">Пустой поисковый запрос</div>';
        } else {
            div.innerHTML = `<div class="message">По запросу &nbsp<b>${params}</b>&nbsp ничего не нашлось</div>`;
        }
        // eslint-disable-next-line no-param-reassign
        searchSection.innerHTML = '';
        searchSection.appendChild(div.firstChild);

        this.el.appendChild(searchSection);
    }

    hide() {
        super.hide();
        this.el.innerHTML = '';
    }
}
