const express = require('express');
const app = express();
const apiRoutes = require('./routes/api-routes');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const host = process.env.HOST;
const port = process.env.PORT || 8080;

mongoose.connect(`${db_url}${db_name}`, { useNewUrlParser: true })
    .catch(error => console.log(error));

const db = mongoose.connection;

app.use(cors());

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
})