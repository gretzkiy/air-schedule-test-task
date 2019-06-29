import Mustache from 'mustache';
import DepartureView from './views/DepartureView';
import ArrivalView from './views/ArrivalView';
import SearchView from './views/SearchView';
import DelaysView from './views/DelaysView';
import Router from './modules/Router';
import baseTemplate from './templates/base.mustache';
import searchTemplate from './templates/search.mustache';
import clockTemplate from './templates/clock.mustache';
import startClock from './modules/Clock';
import './static/css/main.css';

// eslint-disable-next-line no-console
if (window.location.hostname !== 'localhost') console.log = () => { };

const root = document.getElementById('root');

const navSection = document.createElement('section');
navSection.dataset.sectionName = 'nav';

const div = document.createElement('div');
div.innerHTML = Mustache.render(baseTemplate, {}, {
    search: searchTemplate,
    clock: clockTemplate,
});

navSection.appendChild(div.firstChild);
root.appendChild(navSection);

window.router = new Router(root);
window.router
    .register('/', DepartureView)
    .register('/departure', DepartureView)
    .register('/arrival', ArrivalView)
    .register('/delays', DelaysView)
    .register('/search', SearchView);

window.router.start();

const searchButton = document.getElementsByClassName('search__button')[0];
searchButton.addEventListener('click', event => {
    event.preventDefault();
    const searchInput = document.getElementsByClassName('search__input')[0];
    const searchQuery = searchInput.value;
    searchInput.value = '';
    window.router.open('/search', searchQuery);
});

startClock('clock');
