const express = require('express');
const fallback = require('express-history-api-fallback');
const axios = require('axios');

const app = express();
const rootDir = `${__dirname}/..`;

const PORT = process.env.PORT || 3000;
const API_TOKEN = process.env.API_TOKEN;
if (!API_TOKEN) {
    console.log('API_TOKEN must be specified.');
    process.exit(1);
}

app.use(express.static(`${rootDir}/dist`));

const acceptedSchheduleEvents = [
    'departure',
    'arrival',
];

app.use('/api', (request, response) => {
    const { event } = request.query;

    if (!acceptedSchheduleEvents.includes(event)) {

        return response
            .status(400)
            .json({
                status: 400,
                error: true,
                message: `Schedule event must be: ${acceptedSchheduleEvents.join(' or ')}. Got ${event}.`,
            });
    }

    const now = new Date();
    const today = now.toISOString().split('T')[0];

    const url = `https://api.rasp.yandex.net/v3.0/schedule/?\
station=svo&lang=ru_RU\
&format=json\
&transport_types=plane\
&system=iata\
&date=${today}\
&event=${event}\
&apikey=${API_TOKEN}`;

    axios.get(url)
        .then(apiResponse => {
            return response
                .json(apiResponse.data);
        })
        .catch(apiError => {
            return response
                .status(500)
                .json({
                    status: 500,
                    error: true,
                    message: 'Internal API server error.',
                });
        });
});

app.use(fallback('dist/index.html', { root: rootDir }));

app.listen(PORT, () => {
    console.log(`Listening http://localhost:${PORT}`);
});