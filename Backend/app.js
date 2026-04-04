
//     const dotenv = require('dotenv');
//     dotenv.config();
// app.use('/users', userRoutes);
//     const express = require('express');
//     const app = express();
//     const cors = require('cors');

//     const connectTodb = require('./db/db');
// const routes = require('./routes/user.routes');


//     connectTodb();

//     app.use(cors());
//     app.use(express.json());
//     app.use(express.urlencoded({ extended: true }));


//     app.get('/', (reg, res) => {
//         res.send('hello world');
//     })

//     app.use('/users',userRoutes);


//     module.exports = app;









const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const cors = require('cors');
const connectTodb = require('./db/db');

// ✅ correct import name
const userRoutes = require('./routes/user.routes');

connectTodb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello world');
});

// ✅ use after import
app.use('/users', userRoutes);

module.exports = app;