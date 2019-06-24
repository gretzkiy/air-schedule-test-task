export default class Schedule {
    constructor() {
        if (Schedule.__instance) {
            return Schedule.__instance;
        }

        this.schedule = {
            'departure': null,
            'arrival': null
        };

        Schedule.__instance = this;
    }

    getSchedule(event) {
        if (this.schedule[event]) {
            console.log('Schedule from cache.');
            return Promise.resolve(this.schedule[event]);
        } else {
            console.log('Performing api request.');
            return this.downloadSchedule(event)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.schedule[event] = data.schedule;
                    return this.schedule[event];
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    // ввиду отсутствия в api расписания информации о задержках, они генерируются случайным образом, если время уже прошло
    getDelays() {
        let depDelays = new Promise(resolve => {
            const delays = [];
            const timeNow = new Date();
            
            if (this.schedule.departure) {
                this.schedule.departure.forEach((flight) => {
                    const timeDep = new Date(flight.departure);
                    const isDelayed = Math.floor(Math.random() * 2) === 1;
                    if (timeNow - timeDep > 0 && isDelayed) {
                        delays.push(flight);
                    }
                });
                resolve(delays);
            } else {
                this.downloadSchedule('departure')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.schedule.departure = data.schedule;
                        this.schedule.departure.forEach((flight) => {
                            const timeDep = new Date(flight.departure);
                            const isDelayed = Math.floor(Math.random() * 2) === 1;
                            if (timeNow - timeDep > 0 && isDelayed) {
                                delays.push(flight);
                            }
                        });
                        resolve(delays);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        let arrDelays = new Promise(resolve => {
            const delays = [];
            const timeNow = new Date();

            if (this.schedule.arrival) {
                this.schedule.arrival.forEach((flight) => {
                    const timeArr = new Date(flight.departure);
                    const isDelayed = Math.floor(Math.random() * 2) === 1;
                    if (timeNow - timeArr > 0 && isDelayed) {
                        delays.push(flight);
                    }
                });
                resolve(delays);
            } else {
                this.downloadSchedule('arrival')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.schedule.arrival = data.schedule;
                        this.schedule.arrival.forEach((flight) => {
                            const timeArr = new Date(flight.departure);
                            const isDelayed = Math.floor(Math.random() * 2) === 1;
                            if (timeNow - timeArr > 0 && isDelayed) {
                                delays.push(flight);
                            }
                        });
                        resolve(delays);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        return Promise.all([depDelays, arrDelays]);
    }

    search(query) {
        query = query.replace(/\s/g, '').toLowerCase();

        let depSearch = new Promise(resolve => {
            const results = [];

            if (this.schedule.departure) {
                this.schedule.departure.forEach((flight) => {
                    if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                        results.push(flight);
                    }
                });
                resolve(results);
            } else {
                this.downloadSchedule('departure')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.schedule.departure = data.schedule;
                        this.schedule.departure.forEach((flight) => {
                            if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                                results.push(flight);
                            }
                        });
                        resolve(results);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        let arrSearch = new Promise(resolve => {
            const results = [];

            if (this.schedule.arrival) {
                this.schedule.arrival.forEach((flight) => {
                    if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                        results.push(flight);
                    }
                });
                resolve(results);
            } else {
                this.downloadSchedule('arrival')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.schedule.arrival = data.schedule;
                        this.schedule.arrival.forEach((flight) => {
                            if (flight.thread.number.replace(/\s/g, '').toLowerCase().indexOf(query) !== -1) {
                                results.push(flight);
                            }
                        });
                        resolve(results);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });

        return Promise.all([depSearch, arrSearch]);
    }

    downloadSchedule(event) {
        const url = `/api?event=${event}`;

        return fetch(url, {
            method: 'GET',
        });
    }
}