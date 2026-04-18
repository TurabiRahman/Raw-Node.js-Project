const eventEmitter = require('events');

class School extends eventEmitter {
    start_period() {
        console.log('The period has started');

        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                time: '10:00 am',
            });
        }, 3000);
    }
}

module.exports = School;
