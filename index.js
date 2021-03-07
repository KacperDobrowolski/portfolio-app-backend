const express = require('express');
const app = express();
const apiRoutes = require('./routes/api-routes');

require('dotenv').config();

const port = process.env.PORT || 8080;

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running on http://${process.env.HOST}:${port}`);
})