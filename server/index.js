const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('./config/config')

const app = express();
app.use(cors());


app.use(express.urlencoded({ extended: false }));

app.use(express.json());


app.use(require('./routes/users'));

mongoose.connect(process.env.URLDB,

    { useNewUrlParser: true, useUnifiedTopology: true },

    (err, res) => {
        if (err) throw err

        console.log('Database is online');

    });

app.listen(process.env.PORT, () => {
    console.log('Listening port', process.env.PORT);
});