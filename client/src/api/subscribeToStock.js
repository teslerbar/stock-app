import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const subscribeToStock = (cb) => {

    socket.on('connect', function () {
        console.log('Connected to server !');
        // Tell server this is our first connection to it:
        socket.emit('initial_connect', {}, function (stocksData) {
            // In response server send to us all avilable stocks
            cb(stocksData);

            // Start listening for change in price
            socket.on('new_data', function (newData) {
                cb(newData);
            });
        });
    });

};

export default subscribeToStock;

