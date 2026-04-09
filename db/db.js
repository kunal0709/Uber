const mongoose = require('mongoose');

function connectTodb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('connected to DB'))
        .catch((err) => console.error('Error connecting to DB:', err));
}

module.exports = connectTodb;