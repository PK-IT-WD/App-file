const express = require('express');
const app = express();

const routesServer = require('./routesServer');
const routesClient = require('./routesClient');

app.use(express.urlencoded({extended: true}));

app.use('/admin', routesServer);
app.use('/shop', routesClient);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000);