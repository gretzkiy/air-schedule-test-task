import BaseView from "./BaseView.js";
import Schedule from "../modules/Schedule.js"
import Mustache from 'mustache';
import tableTemplate from '../templates/schedule.mustache';

export default class SearchView extends BaseView {
    constructor(el) {
        super(el);
    }

    render(params) {
        this.el.innerHTML = '';

        const searchSection = document.createElement('section');
        searchSection.dataset.sectionName = 'search';

        const div = document.createElement('div');
        div.innerHTML = '<div class="message">Выполняется поиск</div>';
        searchSection.appendChild(div.firstChild);
        this.el.appendChild(searchSection);

        if (!params) {
            const searchParams = new URLSearchParams(window.location.href.split('?')[1]);
            params = searchParams.get('search');
        }
        
        const scheduler = new Schedule();
        if (params) {
            scheduler.search(params)
                .then(results => {
                    results = results[0].concat(results[1]);
                    if (results.length > 0) {
                        const viewData = {
                            "flights": results,
                            "formatDate": function () {
                                const time = new Date(this);
                                const localTime = time.toLocaleString('ru');
                                return localTime;
                            }
                        }

                        const div = document.createElement('div');
                        div.innerHTML = Mustache.render(tableTemplate, viewData);
                        searchSection.innerHTML = `<div class="message">Результаты поиска по запросу &nbsp<b>${params}</b>:</div>`;
                        searchSection.appendChild(div.firstChild);

                        this.el.appendChild(searchSection);
                    } else {
                        this.noEntriesFound(searchSection, params);
                    }
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
            div.innerHTML = `<div class="message">Пустой поисковый запрос</div>`;
        } else {
            div.innerHTML = `<div class="message">По запросу &nbsp<b>${params}</b>&nbsp ничего не нашлось</div>`;
        }
        searchSection.innerHTML = '';
        searchSection.appendChild(div.firstChild);

        this.el.appendChild(searchSection);
    }

    hide() {
        super.hide();
        this.el.innerHTML = '';
    }
}