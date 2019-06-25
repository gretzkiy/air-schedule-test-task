/* eslint-disable */
const express = require('express');
const fallback = require('express-history-api-fallback');
const https = require('https');
const config = require('./config.js');

const app = express();
const rootDir = `${__dirname}`;

app.use(express.static(`${rootDir}/dist`));
app.use('/api',  (request, response) => {
    if (request.query.event !== 'departure' && request.query.event !== 'arrival') {        
        response.status(400).send('Неверный запрос.');
        return;
    }

    const event = request.query.event;
    const now = new Date();
    const today = now.toISOString().split('T')[0];

    const url = `https://api.rasp.yandex.net/v3.0/schedule/?apikey=${config.apikey}&station=svo&lang=ru_RU&format=json&date=${today}&transport_types=plane&event=${event}&system=iata`;

    console.log('Making request to ', url);
    
    let schedule = null;
    https.get(url, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error('Invalid content-type.\n' +
                `Expected application/json but received ${contentType}`);
        }
        if (error) {
            console.error(error.message);
            res.resume();
            response.status(500).send('Не удается получить расписание.');
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                schedule = JSON.parse(rawData);
                response.json(schedule);
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
        response.status(500).send('Не удается получить расписание.');
    });
});

app.use(fallback('src/index.html', { root: rootDir }));

app.listen(3000, () => {
    console.log(`Listening http://localhost:3000`);
});