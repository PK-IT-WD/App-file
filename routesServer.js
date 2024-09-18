const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('Add Product Page');
    res.send('<form action="/admin/product" method="POST"><h1>Product Name: </h1><input type="text" name="title"><br><br><h1>Size: </h1><input type="number" name="size"><button type="submit">Submit</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop');
})

module.exports = router;