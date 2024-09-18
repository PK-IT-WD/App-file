const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('Main Page');
    res.send('<h1>Main Page<h1>');
});


module.exports = router;