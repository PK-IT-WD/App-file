const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the Middleware');
    next();
});

app.use((req, res, next) => {
    console.log('In another Middleware');
    res.send('Hello from Express');
});

app.listen(4000);