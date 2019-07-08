/* eslint-disable no-restricted-globals */
import Mustache from 'mustache';
import Schedule from './Schedule';
import summaryTemplate from '../templates/summary.mustache';

const handleClose = () => {
    removeEventListener('click', handleClose);
    document.querySelector('.summary').remove();
};

export default function showSummary({ flightNumber }) {
    const oldSummary = document.querySelector('.summary');
    if (oldSummary) {
        handleClose();
    }

    const scheduler = new Schedule();
    scheduler.getFlightInfo(flightNumber)
        .then(flightInfo => {
            const summaryContainer = document.createElement('div');
            summaryContainer.innerHTML = Mustache.render(summaryTemplate, {
                flight: flightInfo.thread,
            });
            document.body.appendChild(summaryContainer.firstChild);

            document.querySelector('.close').addEventListener('click', handleClose);
        });
}
