import Mustache from 'mustache';
import Schedule from './Schedule';
import summaryTemplate from '../templates/summary.mustache';

const handleClose = () => {
    // eslint-disable-next-line no-restricted-globals
    removeEventListener('click', handleClose);
    document.querySelector('.summary').remove();
};

export default function showSummary({ flightNumber }) {
    const div = document.createElement('div');
    div.innerHTML = Mustache.render(summaryTemplate, { flightNumber });
    document.body.appendChild(div.firstChild);

    document.querySelector('.close').addEventListener('click', handleClose);
}
